function Obstacle() {
    
    this.x = width;
    //set random height for each obstacle
    this.height = random(30) + 10;
    this.width = 15;
    this.speed = 5;

    r = random(255);
    g = random(100,200);
    b = random(100);
    a = random(200,255);
  
    //set random color for the obstacle
    this.show = function() {
      fill(r, g, b, a);
      rect(this.x, (height - this.height), this.width, this.height);
    }

    this.update = function() {
      this.x -= this.speed;
    }

  }