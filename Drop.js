function Drop(x, y) {
  this.x = x;
  this.y = y;
  this.r = 6;
  this.todlt = false;
  
  this.show = function() {
    fill(150, 0, 255);
    ellipse(this.x, this.y, this.r*2, this.r*2);

   };
   
  this.move = function() {
    this.y = this.y - 5;
  };
  this.hit = function(flower) {
  var d = dist(this.x, this.y, flower.x, flower.y);
  if (d < this.r + flower.r) {
    return  true;
  } else {
    return false;
  }
};

  this.kill = function(todlt) {
    this.todlt = true;
  };
}