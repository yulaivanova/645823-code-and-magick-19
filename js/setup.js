'use strict';

var userDialog = document.querySelector('.setup');
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = userDialog.querySelector('.setup-close');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var form = userDialog.querySelector('.setup-wizard-form');
var submitButton = form.querySelector('.setup-submit');
var inputName = form.querySelector('.setup-user-name');
var wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
var wizardFireboll = userDialog.querySelector('.setup-fireball-wrap');
var firebollInput = wizardFireboll.querySelector('input');
var wizardEyesInput = form.querySelector('#eyes-color-input');
var wizardCoatInput = form.querySelector('#coat-color-input');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_QUANTITY = 4;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var clothesColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var firebollColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomElements = function (elements) {
  return elements[getRandomIntInclusive(0, elements.length - 1)];
};

var onSubmitButtonClick = function () {
  form.submit();
};

var onFormSubmit = function () {
  submitButton.addEventListener('click', onSubmitButtonClick);

  submitButton.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      form.submit();
    }
  });
};

var onInputNameInvalid = function () {
  if (inputName.validity.tooShort) {
    inputName.setCustomValidity('имя персонажа не может содержать менее 2 символов');
  }
};

var onPopupEscPress = function (evt) {
  if (document.activeElement !== inputName) {
    if (evt.key === ESC_KEY) {
      closePopup();
    }
  }
};

var getRandomElementColor = function (color, element, elemetInput) {
  var randomElement = getRandomElements(color);
  element.style.fill = randomElement;
  elemetInput.setAttribute('value', randomElement);
};

var onEyesClick = function () {
  getRandomElementColor(eyesColor, wizardEyes, wizardEyesInput);
};

var onCoatClick = function () {
  getRandomElementColor(clothesColors, wizardCoat, wizardCoatInput);
};

var onFirebollClick = function () {
  var randomColorFireboll = getRandomElements(firebollColor);
  wizardFireboll.setAttribute('style', 'background: ' + randomColorFireboll);
  firebollInput.setAttribute('value', randomColorFireboll);
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  inputName.addEventListener('invalid', onInputNameInvalid);
  wizardCoat.addEventListener('click', onCoatClick);
  wizardFireboll.addEventListener('click', onFirebollClick);
  wizardEyes.addEventListener('click', onEyesClick);
  form.addEventListener('submit', onFormSubmit);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  inputName.removeEventListener('invalid', onInputNameInvalid);
  wizardCoat.removeEventListener('click', onCoatClick);
  wizardFireboll.removeEventListener('click', onFirebollClick);
  wizardEyes.removeEventListener('click', onEyesClick);
  form.removeEventListener('submit', onFormSubmit);
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

userDialogClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var createWizard = function () {
  var wizard = {};
  wizard.name = getRandomElements(WIZARD_NAMES);
  wizard.surname = getRandomElements(WIZARD_SURNAMES);
  wizard.coatColor = getRandomElements(COAT_COLORS);
  wizard.eyesColor = getRandomElements(EYES_COLORS);
  return wizard;
};

var createWizards = function (quantity) {
  var wizards = [];
  for (var i = 0; i < quantity; i++) {
    wizards.push(createWizard());
  }
  return wizards;
};

var generatedWizards = createWizards(WIZARD_QUANTITY);

var createWizardElement = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(createWizardElement(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

renderWizards(generatedWizards);
