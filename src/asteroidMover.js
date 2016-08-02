var AsteroidMover = function(top, left, timeBetweenSteps) {
  Mover.apply(this, arguments);
};

AsteroidMover.prototype = Object.create(Mover.prototype);

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

Mover.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: Math.random() * ($("body").height() * 0.66 - $("body").height() * 0.33) + $("body").height() * 0.33,
    left: Math.random() * ($("body").width() * 0.66 - $("body").width() * 0.33) + $("body").width() * 0.33,
    top: (top / $("body").height()) * $("body").height(),
    left: (left / $("body").width()) * $("body").width()
    // Math.random() * (max - min) + min
  };
  this.$node.css(styleSettings);
};

AsteroidMover.prototype.step = function(timeBetweenSteps) {
  Mover.prototype.step.call(this);
  // this.$node.toggle();
  this.$node.top = $("body").height() * 0.5;
  // this.$node.css(styleSettings);
};

AsteroidMover.prototype.detectCorner = function(top, left) {
  top = Math.round(top / $("body").height() * $("body").height());
  left = Math.round(left / $("body").width() * $("body").width());
  return [top, left];
};
