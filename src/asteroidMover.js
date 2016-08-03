var AsteroidMover = function(top, left, timeBetweenSteps) {
  Mover.apply(this, arguments);
};

AsteroidMover.prototype = Object.create(Mover.prototype);

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

AsteroidMover.prototype.setPosition = function(top, left) {
  this.top = Math.random() * ($('body').height() * 0.55 - $('body').height() * 0.45) + $('body').height() * 0.45;
  this.left = Math.random() * ($('body').width() * 0.55 - $('body').width() * 0.45) + $('body').width() * 0.45;
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
  // this.detectCorner(top, left);
};

AsteroidMover.prototype.step = function(timeBetweenSteps) {
  var asteroids = ['img/asteroid0.png', 'img/asteroid1.png', 'img/asteroid2.png', 'img/asteroid3.gif'];
  var asteroid = asteroids[Math.round(Math.random() * 3)];
  this.$node.html('<img class="mover" src=' + asteroid + '></img>');
  Mover.prototype.step.call(this);
  var newHeight = $('body').height() / 2;
  var newWidth = $('body').width() / 2;

  var topEdge = [0 - 1.5 * newHeight, Math.floor(Math.random() * $('body').width() + 1)];
  var rightEdge = [Math.floor(Math.random() * $('body').height() + 1), $('body').width() + 1.5 * newWidth];
  var bottomEdge = [$('body').height() + 1.5 * newHeight, Math.floor(Math.random() * $('body').width() + 1)];
  var leftEdge = [Math.floor(Math.random() * $('body').height() + 1), 0 - 1.5 * newWidth];

  var edge = [topEdge, rightEdge, bottomEdge, leftEdge][Math.floor(Math.random() * 4)];

  this.$node.animate({
    'top': ((edge[0]) && (edge[0] - newHeight)) + 'px',
    'left': ((edge[1]) && (edge[1] - newWidth)) + 'px',
    'height': newHeight + 'px',
    'width': newWidth + 'px',
  }, 10000, function() {});

};
