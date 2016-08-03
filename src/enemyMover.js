var EnemyMover = function(top, left, timeBetweenSteps) {
  Mover.apply(this, arguments);
};

EnemyMover.prototype = Object.create(Mover.prototype);

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

EnemyMover.prototype.setPosition = function(top, left) {
  // these two instantiate the 'enemy' nodes at completely random points
  // this.top = Math.floor(Math.random() * $('body').height() + 1);
  // this.left = Math.floor(Math.random() * $('body').width() + 1);
  // these two instantiate the 'enemy nodes' in the center 50% of the screen
  this.top = Math.random() * ($('body').height() * 0.75 - $('body').height() * 0.25) + $('body').height() * 0.25;
  this.left = Math.random() * ($('body').width() * 0.75 - $('body').width() * 0.25) + $('body').width() * 0.25;
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
  // this.detectCorner(top, left);
};

EnemyMover.prototype.step = function(timeBetweenSteps) {
  var enemies = ['img/enemy0.gif', 'img/enemy1.gif'];
  var enemy = enemies[Math.floor(Math.random() * 2)];
  this.$node.html('<img class="mover" src=' + enemy + '></img>');
  Mover.prototype.step.call(this);
  var newHeight = $('body').height() / 2;
  var newWidth = $('body').width() / 2;

  var top = [0 - 1.5 * newHeight, Math.floor(Math.random() * $('body').width() + 1)];
  var right = [Math.floor(Math.random() * $('body').height() + 1), $('body').width() + 1.5 * newWidth];
  var bottom = [$('body').height() + 1.5 * newHeight, Math.floor(Math.random() * $('body').width() + 1)];
  var left = [Math.floor(Math.random() * $('body').height() + 1), 0 - 1.5 * newWidth];

  var edge = [top, right, bottom, left][Math.floor(Math.random() * 4)];

  this.$node.animate({
    'top': ((edge[0]) && (edge[0] - newHeight)) + 'px',
    'left': ((edge[1]) && (edge[1] - newWidth)) + 'px',
    'height': newHeight + 'px',
    'width': newWidth + 'px',
  }, 10000, function() {
    $('.game-over').removeClass('hidden');
    clearInterval(gamePlay);
  });
};

// console.log(this);
// var CL = function(string) {
//   console.log(JSON.parse(string));
// };

// generate random range: Math.floor(Math.random()*(max-min+1)+min);

// var findLeft = Math.round(this.left / $('body').width()) * $('body').width();
// var findTop = Math.round(this.top / $('body').height()) * $('body').height();
// var newTop = findTop === 0 ? findTop : findTop - newHeight;
// var newLeft = findLeft === 0 ? findLeft : findLeft - newWidth;
