var gamePlay;
var music = new Audio('mp3/dfMusic.mp3');
var laser = new Audio('mp3/laser0.wav');
laser.volume = .5;
var astBoom = new Audio('mp3/enemyBoom.mp3');
astBoom.volume = .4;
music.play();

$(document).ready(function() {
  window.movers = [];
  var points = 0;

  $('.start').on('click', function(event) {
    $(document.body).click(function() {
      laser.currentTime = 0;
      laser.play();
    });

    $('.start-button').addClass('hidden');
    var moverMakerFunction = AsteroidMover;

    gamePlay = setInterval(function() {
      var mover = new moverMakerFunction(
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 1000
      );

      $(mover.$node).click(function() {
        laser.currentTime = 0;
        laser.play();
        astBoom.currentTime = 0;
        astBoom.play();
        points++;
        var explosion = 'img/expl0.gif';
        $(mover.$node).find('img').attr('src', explosion);
        $('.pointsShower').text('Points: ' + points);
        setTimeout(function() {
          $(mover.$node).remove();
        }, 1000);
      });
      $('body').append(mover.$node);
    }, 500);
  });
});
