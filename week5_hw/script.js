class Car {
    constructor(cColor, x, y) {
      this.color = cColor;
      this.x = x;
      this.y = y;
      this.speed = 0;
    }
  
    start(speed) {
      this.speed = speed;
    }
  
    display() {
      fill(this.color);
      rect(this.x, this.y, 50, 20, 5);
    }
  
    move() {
      this.x += this.speed;
      if (this.x < -50) {
        this.x = width;
      } else if (this.x > width) {
        this.x = -50;
      }
    }
  }
  
  let carBlue;
  let carYellow;
  let carSilver;
  
  function setup() {
    createCanvas(800, 210);
    
    
    carSilver = new Car("silver", 0, 165);
    carYellow = new Car("gold", 0, 95);  
    carBlue = new Car("blue", 0, 25); 
    
    console.log("carSilver", carSilver);
    console.log("carYellow", carYellow);
    console.log("carBlue", carBlue);
    
    carSilver.start(cos(-5));
    carYellow.start(sin(-5));
    carBlue.start(random(5));
  }
  
  function draw() {
    background("gray");
    
    stroke(0,0);
    carSilver.display();
    carYellow.display();
    carBlue.display();
    
    carSilver.move();
    carYellow.move();
    carBlue.move();
    
    strokeWeight(3);
    stroke("white");
    drawingContext.setLineDash([20, 10]);
    line(0, 70, 800, 70);
    line(0, 140, 800, 140);
  }