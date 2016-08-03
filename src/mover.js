// Creates and returns a new Mover object that can step
var Mover = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="mover"></span>');
  this.setPosition(top, left);
  this.step();
};

Mover.prototype.step = function() {
  this.step;
};

Mover.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
