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
var CLOUD_COLOR = '#fff';
var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var renderCloudWithShadow = function (ctx) {
  ctx.fillStyle = CLOUD_SHADOW_COLOR;
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH + GAP, CLOUD_HEIGHT + GAP);
  ctx.fillStyle = CLOUD_COLOR;
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, string, x, y) {
  ctx.font = FONT_PROPERTIES;
  ctx.fillStyle = BASIC_FONT_COLOR;
  ctx.fillText(string, x, y);
};

var renderColumn = function (ctx, maxTime, times, columnIndex) {
  var columnHeight = (BAR_HEIGHT * times[columnIndex]) / maxTime - 30;
  var columnX = CLOUD_X + FONT_GAP + (TEXT_WIDTH + BAR_GAP) * columnIndex;
  var columnY = CLOUD_HEIGHT - (BAR_HEIGHT * times[columnIndex]) / maxTime - 30;
  ctx.fillRect(columnX, columnY, BAR_WIDTH, columnHeight);
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

var getRandomBlueColor = function (ctx) {
  ctx.fillStyle = 'hsl(' + 230 + ', ' + getRandomIntInclusive(20, 100) + '%,  ' + getRandomIntInclusive(20, 80) + '%)';
};

// поиск рандомного целого числа
var getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var renderBars = function (ctx, playersName, times) {
  var maxTime = getMaxElement(times);

  for (var i = 0; i < playersName.length; i++) {
    if (playersName[i] === PLAYER_NAME) {
      ctx.fillStyle = PLAYER_BAR_COLOR;
    } else {
      getRandomBlueColor(ctx);
    }

    renderColumn(ctx, maxTime, times, i);

    renderText(ctx, playersName[i], CLOUD_X + FONT_GAP + (TEXT_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP);
    renderText(ctx, Math.round(times[i]), CLOUD_X + FONT_GAP + (TEXT_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - 185);
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloudWithShadow(ctx);

  renderText(ctx, TopText.WINNER, TextCoord.TEXT_X, TextCoord.WINNER_TEXT_Y);
  renderText(ctx, TopText.RESULTS, TextCoord.TEXT_X, TextCoord.RESULTS_TEXT_Y);

  renderBars(ctx, players, times);
};
