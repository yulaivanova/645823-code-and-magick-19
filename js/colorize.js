'use strict';

(function () {
  window.colorize = function (colors, element, property, elemetInput) {
    var randomElement = window.randomization.getRandomElements(colors);
    element.style[property] = randomElement;
    elemetInput.value = randomElement;
  };

})();
