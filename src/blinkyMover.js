var BlinkyMover = function(top, left, timeBetweenSteps) {
  Mover.apply(this, arguments);
};

BlinkyMover.prototype = Object.create(Mover.prototype);

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

BlinkyMover.prototype.step = function(timeBetweenSteps) {
  Mover.prototype.step.call(this);
  this.$node.toggle();
};
