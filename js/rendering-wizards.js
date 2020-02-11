'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_QUANTITY = 4;

  var userDialog = document.querySelector('.setup');
  var similarList = document.querySelector('.setup-similar');

  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var createWizard = function () {
    var wizard = {};
    wizard.name = window.randomization.getRandomElements(WIZARD_NAMES);
    wizard.surname = window.randomization.getRandomElements(WIZARD_SURNAMES);
    wizard.coatColor = window.randomization.getRandomElements(window.wizardElements.COAT_COLORS);
    wizard.eyesColor = window.randomization.getRandomElements(window.wizardElements.EYES_COLORS);
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
  similarList.classList.remove('hidden');

})();
