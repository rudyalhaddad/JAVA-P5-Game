var ship;
var drop = [];
var flowers = [];
var score = 0 


function setup() {
  createCanvas(600, 500);
  ship = new Ship();
  for (var i = 0; i < 7; i++) {
   flowers[i] = new Flower(i*70+40, 60);
}
}


function draw() {
  background(51);
  ship.show();
  ship.move();
  for (var l = 0; l < drop.length; l++) {
  drop[l].show();
  drop[l].move();
  for (var k = 0; k < flowers.length; k++){
    if (drop[l].hit(flowers[k])) {
       drop[l].kill();
       flowers[k].grow();
      }
    }
  }
  var edge = false;
  for (var i = 0; i < flowers.length; i++) {
  flowers[i].show();
  flowers[i].move();
    if (flowers[i].x > width - 30 || flowers[i].x <0) {
       edge = true;
  }
  }
  if (edge) {
  for (var i = 0; i < flowers.length; i++) {
    flowers[i].shiftdown();
  }
    makeFlower();
  }
  
  for (var l = 0; l < drop.length; l++) {
     if (drop[l].todlt) {
       drop.splice(l,1);
  }
}
  for (var k = 0; k < flowers.length; k++){
    if (flowers[k].r > 32) {
    flowers.splice(k,1);
      score = score += 50;
    }
}
  for (var i = 0; i < flowers.length; i++) {
     if (flowers[i].y > 360) {
       console.log("LOSER!");
       gameOver();
}
  }
}
function keyReleased(){
  if (keyCode != DOWN_ARROW) {
  ship.setDIR(0);
  }
  }
function makeFlower() {
  for (var i = 0; i < 7; i++) {
   flower1 = new Flower(i*70+40, 60);
    flowers.push(flower1);
  }
}
function gameOver(){
  background(255)
    fill(0,0,0,150)
    textAlign(CENTER)
    textSize(40)
    textFont('Georgia');
    textStyle(BOLD);
    text("Game Over 💩 score= " + score,width/2,height/2);
    noLoop()
}
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var drops = new Drop(ship.x + 10, 390);
    drop.push(drops);
  }
  
  if (keyCode === RIGHT_ARROW) {
    ship.setDIR(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDIR(-1);
  }
}
    