'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.wizardElements = {
    coat: wizardCoat,
    eyes: wizardEyes,
    fireball: wizardFireball,
    COAT_COLORS: COAT_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS,
    EYES_COLORS: EYES_COLORS,
  };

})();
