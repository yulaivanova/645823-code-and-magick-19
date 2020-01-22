'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var FONT_GAP = 40;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

//поиск рандомного целого числа
var  getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.font = "16px PT Mono";
  ctx.fillText('Ура вы победили! ', 120, 40);
  ctx.fillText('Список результатов:  ', 120, 60);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(' + 230 + ', ' + getRandomIntInclusive(20, 100) + '%,  ' + getRandomIntInclusive(20, 80) + '%)';
    }

    ctx.fillRect(CLOUD_X + FONT_GAP + (TEXT_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime - 30, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + FONT_GAP + (TEXT_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + FONT_GAP + (TEXT_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - 185);
  }

};

