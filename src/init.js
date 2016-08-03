var gamePlay;
var enemyPlay;
var music = new Audio('mp3/dfMusic.mp3');
var laser = new Audio('mp3/laser0.wav');
var astBoom = new Audio('mp3/enemyBoom.mp3');
var explosion = 'img/expl0.gif';
laser.volume = .5;
astBoom.volume = .4;
music.loop = true;
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
    var enemyMakerFunction = EnemyMover;

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
        $(mover.$node).find('img').attr('src', explosion);
        $('.points-shower').text('Points: ' + points);
        setTimeout(function() {
          $(mover.$node).remove();
        }, 3000);
      });
      $('body').append(mover.$node);
    }, 500);

    enemyPlay = setInterval(function() {
      var enemy = new enemyMakerFunction(
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 1000
      );

      $(enemy.$node).click(function() {
        laser.currentTime = 0;
        laser.play();
        astBoom.currentTime = 0;
        astBoom.play();
        points++;
        $(enemy.$node).find('img').attr('src', explosion);
        $('.pointsShower').text('Points: ' + points);
        setTimeout(function() {
          $(enemy.$node).remove();
        }, 3000);
      });
      $('body').append(enemy.$node);
    }, 500);

  });
});
