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
var FONT_PROPERTIES = ['16px', 'PT Mono'];
var BASIC_FONT_COLOR = '#000';
var TopText = {
  WINNER: 'Ура вы победили!',
  RESULTS: 'Список результатов:',
};
var TextCoord = {
  TEXT_X: 120,
  WINNER_TEXT_Y: 40,
  RESULTS_TEXT_Y: 60,
};
var PLAYER_NAME = 'Вы';
var PLAYER_BAR_COLOR = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, string, x, y) {
  ctx.font = FONT_PROPERTIES;
  ctx.fillStyle = BASIC_FONT_COLOR;
  ctx.fillText(string, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

// поиск рандомного целого числа
var getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var renderBars = function (ctx, players, times) {
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === PLAYER_NAME) {
      ctx.fillStyle = PLAYER_BAR_COLOR;
    } else {
      ctx.fillStyle = 'hsl(' + 230 + ', ' + getRandomIntInclusive(20, 100) + '%,  ' + getRandomIntInclusive(20, 80) + '%)';
    }

    ctx.fillRect(CLOUD_X + FONT_GAP + (TEXT_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime - 30, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);

    renderText(players[i], CLOUD_X + FONT_GAP + (TEXT_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP);
    renderText(Math.round(times[i]), CLOUD_X + FONT_GAP + (TEXT_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - 185);
  }
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx, TopText.WINNER, TextCoord.TEXT_X, TextCoord.WINNER_TEXT_Y);
  renderText(ctx, TopText.RESULTS, TextCoord.TEXT_X, TextCoord.RESULTS_TEXT_Y);

  renderBars();
};
