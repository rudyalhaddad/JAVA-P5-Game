function Ship() {
  this.x = width/2;
  this.xdir = 0;
  this.show = function() {
    fill(255);
    rect(this.x, height=450, 20, 30);
  };
  
  this.move = function(dir) {
    this.x += this.xdir * 2;
  };
  this.setDIR = function(dir){
    this.xdir = dir;
  }
  
 
}

