'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var form = userDialog.querySelector('.setup-wizard-form');
  var inputName = form.querySelector('.setup-user-name');

  window.validation = {
    onInputNameInvalid: function () {
      if (inputName.validity.tooShort) {
        inputName.setCustomValidity('Имя персонажа не может содержать менее 2 символов');
      }
    },
  };

})();
