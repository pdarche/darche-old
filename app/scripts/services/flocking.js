'use-strict';

angular.module('darcheApp')
  .factory('flocking', function() {
    return function(sketch) {
      var boids = [];
      var width = $(window).width();
      var height = $(window).height();

      sketch.setup = function() {
        sketch.createCanvas(width, height);

        // Add an initial set of boids into the system
        for (var i = 0; i < 100; i++) {
          boids[i] = new sketch.Boid(sketch.random(width), sketch.random(height));
        }
      }

      sketch.draw = function() {
        sketch.background(255);
        // Run all the boids
        for (var i = 0; i < boids.length; i++) {
          boids[i].run(boids);
        }
      }

      // Boid class
      // Methods for Separation, Cohesion, Alignment added
      sketch.Boid = function(x, y) {
        var xPos = Math.random() * width;
        this.acceleration = sketch.createVector(0, 0);
        this.velocity = p5.Vector.random2D();
        this.position = sketch.createVector(0, 0);
        this.r = 3.0;
        this.maxspeed = 3;    // Maximum speed
        this.maxforce = 0.05; // Maximum steering force
      }

      sketch.Boid.prototype.run = function(boids) {
        this.flock(boids);
        this.update();
        this.borders();
        this.render();
      }

      // Forces go into acceleration
      sketch.Boid.prototype.applyForce = function(force) {
        this.acceleration.add(force);
      }

      // We accumulate a new acceleration each time based on three rules
      sketch.Boid.prototype.flock = function(boids) {
        var sep = this.separate(boids); // Separation
        var ali = this.align(boids);    // Alignment
        var coh = this.cohesion(boids); // Cohesion
        // Arbitrarily weight these forces
        sep.mult(2.5);
        ali.mult(1.0);
        coh.mult(1.0);
        // Add the force vectors to acceleration
        this.applyForce(sep);
        this.applyForce(ali);
        this.applyForce(coh);
      }

      // Method to update location
      sketch.Boid.prototype.update = function() {
        // Update velocity
        this.velocity.add(this.acceleration);
        // Limit speed
        this.velocity.limit(this.maxspeed);
        this.position.add(this.velocity);
        // Reset accelertion to 0 each cycle
        this.acceleration.mult(0);
      }

      // A method that calculates and applies a steering force towards a target
      // STEER = DESIRED MINUS VELOCITY
      sketch.Boid.prototype.seek = function(target) {
        var desired = p5.Vector.sub(target, this.position); // A vector pointing from the location to the target
        // Normalize desired and scale to maximum speed
        desired.normalize();
        desired.mult(this.maxspeed);
        // Steering = Desired minus Velocity
        var steer = p5.Vector.sub(desired, this.velocity);
        steer.limit(this.maxforce); // Limit to maximum steering force
        return steer;
      }

      // Draw boid as a circle
      sketch.Boid.prototype.render = function() {
        sketch.fill('rgba(70, 130, 180, .8)');
        // fill(this.rgb[0], this.rgb[1], this.rgb[2]);
        sketch.stroke(200);
        sketch.ellipse(this.position.x, this.position.y, 16, 16);
      }

      // Wraparound
      sketch.Boid.prototype.borders = function() {
        if (this.position.x < -this.r) this.position.x = width + this.r;
        if (this.position.y < -this.r) this.position.y = height + this.r;
        if (this.position.x > width + this.r) this.position.x = -this.r;
        if (this.position.y > height + this.r) this.position.y = -this.r;
      }

      // Separation
      // Method checks for nearby boids and steers away
      sketch.Boid.prototype.separate = function(boids) {
        var desiredseparation = 25.0;
        var steer = sketch.createVector(0, 0);
        var count = 0;
        // For every boid in the system, check if it's too close
        for (var i = 0; i < boids.length; i++) {
          var d = p5.Vector.dist(this.position, boids[i].position);
          // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
          if ((d > 0) && (d < desiredseparation)) {
            // Calculate vector pointing away from neighbor
            var diff = p5.Vector.sub(this.position, boids[i].position);
            diff.normalize();
            diff.div(d); // Weight by distance
            steer.add(diff);
            count++; // Keep track of how many
          }
        }
        // Average -- divide by how many
        if (count > 0) {
          steer.div(count);
        }

        // As long as the vector is greater than 0
        if (steer.mag() > 0) {
          // Implement Reynolds: Steering = Desired - Velocity
          steer.normalize();
          steer.mult(this.maxspeed);
          steer.sub(this.velocity);
          steer.limit(this.maxforce);
        }
        return steer;
      }

      // Alignment
      // For every nearby boid in the system, calculate the average velocity
      sketch.Boid.prototype.align = function(boids) {
        var neighbordist = 50;
        var sum = sketch.createVector(0, 0);
        var count = 0;
        for (var i = 0; i < boids.length; i++) {
          var d = p5.Vector.dist(this.position, boids[i].position);
          if ((d > 0) && (d < neighbordist)) {
            sum.add(boids[i].velocity);
            count++;
          }
        }
        if (count > 0) {
          sum.div(count);
          sum.normalize();
          sum.mult(this.maxspeed);
          var steer = p5.Vector.sub(sum, this.velocity);
          steer.limit(this.maxforce);
          return steer;
        } else {
          return sketch.createVector(0, 0);
        }
      }

      // Cohesion
      // For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
      sketch.Boid.prototype.cohesion = function(boids) {
        var neighbordist = 50;
        var sum = sketch.createVector(0, 0); // Start with empty vector to accumulate all locations
        var count = 0;
        for (var i = 0; i < boids.length; i++) {
          var d = p5.Vector.dist(this.position, boids[i].position);
          if ((d > 0) && (d < neighbordist)) {
            sum.add(boids[i].position); // Add location
            count++;
          }
        }
        if (count > 0) {
          sum.div(count);
          return this.seek(sum); // Steer towards the location
        } else {
          return sketch.createVector(0, 0);
        }
      }
    };
  });