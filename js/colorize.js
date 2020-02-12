'use strict';

(function () {
  window.colorize = function (colors, element, property, elementInput) {
    var randomElement = window.randomization.getRandomElements(colors);
    element.style[property] = randomElement;
    elementInput.value = randomElement;
  };

})();
