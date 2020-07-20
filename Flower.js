function Flower(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;
  this.xdir = 1;
  this.ydir = 0;
  this.show = function() {
    fill(255, 0, 200);
    ellipse(this.x, this.y, this.r*2, this.r*2);
    
  };
  
  this.grow = function() {
  this.r = this.r + 2;
  
  };
  this.shiftdown = function(){
  this.xdir *= -1;
    this.y += 72;
  };
  this.move = function() {
  this.x = this.x + this.xdir;
  this.y = this.y + this.ydir;
  };
  
}