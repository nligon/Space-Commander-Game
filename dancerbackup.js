// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.called = false;
};

makeDancer.prototype.step = function(top, left, timeBetweenSteps) {
  // console.log('top', top);
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  console.log('test');
  context = this;
  setTimeout(function() {
    console.log('anything?')
  // that.step(top, left, timeBetweenSteps);
  // console.log('context:', context);
  // console.log('this:', this);

  console.log('this:', this);
    return this.step();
  }, this.timeBetweenSteps);
};

// console.log('this:', this);


makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //h
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// (this.top, this.left);
// makeDancer.setPosition(top, left);

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
