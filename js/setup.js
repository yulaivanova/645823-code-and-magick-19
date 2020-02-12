'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');

  var form = userDialog.querySelector('.setup-wizard-form');
  var inputName = form.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if (evt.key === ESC_KEY) {
      closePopup();
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    setupPopup(true);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    setupPopup(false);
  };

  userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      openPopup();
    }
  });

  userDialogClose.addEventListener('click', function () {
    closePopup();
  });

  userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      closePopup();
    }
  });

  inputName.addEventListener('keydown', function (evtInput) {
    if (evtInput.code === ESC_KEY) {
      evtInput.stopPropagation();
    }
  });

  var setupPopup = function (state) {
    var method = state ? 'addEventListener' : 'removeEventListener';
    document[method]('keydown', onPopupEscPress);
    inputName[method]('invalid', window.validation.onInputNameInvalid);
    window.wizardElements.coat[method]('click', window.customization.onCoatClick);
    window.wizardElements.fireball[method]('click', window.customization.onFirebollClick);
    window.wizardElements.eyes[method]('click', window.customization.onEyesClick);
  };

})();
