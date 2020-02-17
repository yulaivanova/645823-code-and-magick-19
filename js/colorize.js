'use strict';

(function () {
  window.colorize = function (colors, element, property, elementInput) {
    var randomElement = window.util.getRandomElements(colors);
    element.style[property] = randomElement;
    elementInput.value = randomElement;
  };

})();
