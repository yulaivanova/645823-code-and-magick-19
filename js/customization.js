'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var firebollInput = window.wizardElements.wizardFireboll.querySelector('input');
  var form = userDialog.querySelector('.setup-wizard-form');
  var wizardEyesInput = form.querySelector('#eyes-color-input');
  var wizardCoatInput = form.querySelector('#coat-color-input');

  window.customization = {
    onEyesClick: function () {
      window.colorize(window.wizardElements.EYES_COLORS, window.wizardElements.wizardEyes, 'fill', wizardEyesInput);
    },
    onCoatClick: function () {
      window.colorize(window.wizardElements.COAT_COLORS, window.wizardElements.wizardCoat, 'fill', wizardCoatInput);
    },
    onFirebollClick: function () {
      window.colorize(window.wizardElements.FIREBALL_COLORS, window.wizardElements.wizardFireboll, 'backgroundColor', firebollInput);
    },
  };

})();
