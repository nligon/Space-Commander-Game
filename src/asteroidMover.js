var AsteroidMover = function(top, left, timeBetweenSteps) {
  Mover.apply(this, arguments);
};

AsteroidMover.prototype = Object.create(Mover.prototype);

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

Mover.prototype.setPosition = function(top, left) {
  this.top = Math.random() * ($('body').height() * 0.66 - $('body').height() * 0.33) + $('body').height() * 0.33;
  this.left = Math.random() * ($('body').width() * 0.66 - $('body').width() * 0.33) + $('body').width() * 0.33;
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
  // this.detectCorner(top, left);
};

AsteroidMover.prototype.step = function(timeBetweenSteps) {
  var asteroids = ['img/asteroidTwo.png', 'img/asteroidThree.jpg'];
  var asteroid = asteroids[Math.round(Math.random())];
  this.$node.html('<img class="mover" src=' + asteroid + '></img>');
  Mover.prototype.step.call(this);
  var newHeight = $('body').height() / 4;
  var newWidth = $('body').width() / 4;
  var findLeft = Math.round(this.left / $('body').width()) * $('body').width();
  var findTop = Math.round(this.top / $('body').height()) * $('body').height();
  var newTop = findTop === 0 ? findTop : findTop - newHeight;
  var newLeft = findLeft === 0 ? findLeft : findLeft - newWidth;
  console.log('this', this);
  this.$node.animate({
    'top': newTop + 'px',
    'left': newLeft + 'px',
    'height': newHeight + 'px',
    'width': newWidth + 'px',
    'transform': 'rotate(40deg);'
  }, 3000);
};

// console.log(this);
var CL = function(string) {
  console.log(string + ':');
};
