describe('BlinkyDancer', function() {

  var blinkyDancerInstance, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancerInstance = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancerInstance.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancerInstance.$node, 'toggle');
    blinkyDancerInstance.step();
    expect(blinkyDancerInstance.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancerInstance, 'step');
      expect(blinkyDancerInstance.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(blinkyDancerInstance.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(blinkyDancerInstance.step.callCount).to.be.equal(2);
    });
  });
});
