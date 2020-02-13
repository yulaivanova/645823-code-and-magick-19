'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var fireballInput = window.wizardElements.fireball.querySelector('input');
  var form = userDialog.querySelector('.setup-wizard-form');
  var wizardEyesInput = form.querySelector('#eyes-color-input');
  var wizardCoatInput = form.querySelector('#coat-color-input');

  window.customization = {
    onEyesClick: function () {
      window.colorize(window.wizardElements.EYES_COLORS, window.wizardElements.eyes, 'fill', wizardEyesInput);
    },
    onCoatClick: function () {
      window.colorize(window.wizardElements.COAT_COLORS, window.wizardElements.coat, 'fill', wizardCoatInput);
    },
    onFirebollClick: function () {
      window.colorize(window.wizardElements.FIREBALL_COLORS, window.wizardElements.fireball, 'backgroundColor', fireballInput);
    },
  };

})();
