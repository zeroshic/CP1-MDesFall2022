//Project is to replicate Dino game from Google Chrome  

var player;
  var obstacles = [];

  function setup() {
    start();
  }

  function draw() {
    background(0);

    //new obstacle occurance
    for(var i = obstacles.length - 1; i >= 0; i--) {
      obstacles[i].show();
      obstacles[i].update();

    //reset the game when the player hits the obstacle
    if(player.hits(obstacles[i])) {
        start();
        return false;
    }    
    }

    player.update();
    player.show();

    //gap between the obstacle
    if(frameCount % 90 == 0) {
      obstacles.push(new Obstacle());
    }
    }

    //mouse click to jump
    function mousePressed(){
    player.jump(); 
    }

    function start() {
    obstacles = [];

    var canvas = createCanvas(800, 300);
    canvas.parent('canvas');

    player = new Player();
    obstacles.push(new Obstacle());
  }