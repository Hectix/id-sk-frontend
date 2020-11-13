import '../../../govuk/vendor/polyfills/Function/prototype/bind'
import '../../../govuk/vendor/polyfills/Event' // addEventListener and event.target normaliziation
import { toggleClass } from '../../common'

/**
 * Footer for extended websites
 */
function FooterExtended($module) {
    this.$module = $module;
}

FooterExtended.prototype.init = function () {
    let $module = this.$module;
    // check for module
    if (!$module) {
        return;
    }

    let $yesButton = $module.querySelector('#idsk-footer-extended-feedback-yes-button');
    let $noButton = $module.querySelector('#idsk-footer-extended-feedback-no-button');
    let $errorButton = $module.querySelector('#idsk-footer-extended-error-button');
    let $closeErrorFormButton = $module.querySelector('#idsk-footer-extended-close-error-form-button');
    let $closeHelpFormButton = $module.querySelector('#idsk-footer-extended-close-help-form-button');


    let $closeErrorFormButtonTablet = $module.querySelector('#idsk-footer-extended-close-error-form-button-tablet');
    let $closeHelpFormButtonTablet = $module.querySelector('#idsk-footer-extended-close-help-form-button-tablet');


    let $textAreaCharacterCount = $module.querySelector('#idsk-footer-extended-error-form #with-hint');

    let $fillFeedbackButton = $module.querySelector('#fill-feedback-help-form');
    let $submitErrorButton = $module.querySelector('#submit-button-error-form');


    let $writeUsButton = this.$module.querySelector('#idsk-footer-extended-write-us-button');

    if ($yesButton && $noButton && $errorButton) {
        $yesButton.addEventListener('click', this.handleYesButtonClick.bind(this));
        $noButton.addEventListener('click', this.handleNoButtonClick.bind(this));
        $errorButton.addEventListener('click', this.handleErrorButtonClick.bind(this));
    }

    if ($writeUsButton) {
        $writeUsButton.addEventListener('click', this.handleErrorButtonClick.bind(this));
    }

    if ($closeHelpFormButton) {
        $closeHelpFormButton.addEventListener('click', this.handleCloseHelpFormButtonClick.bind(this));
    }

    if ($closeErrorFormButton) {
        $closeErrorFormButton.addEventListener('click', this.handleCloseErrorFormButtonClick.bind(this));
    }

    if ($closeErrorFormButtonTablet) {
        $closeErrorFormButtonTablet.addEventListener('click', this.handleCloseErrorFormButtonClick.bind(this));
    }

    if ($closeHelpFormButtonTablet) {
        $closeHelpFormButtonTablet.addEventListener('click', this.handleCloseHelpFormButtonClick.bind(this));
    }

    if ($fillFeedbackButton) {
        $fillFeedbackButton.addEventListener('click', this.handleSubmitButtonClick.bind(this));
    }

    if ($submitErrorButton) {
        $submitErrorButton.addEventListener('click', this.handleSubmitButtonClick.bind(this));
    }

    if ($textAreaCharacterCount) {
        $textAreaCharacterCount.addEventListener('input', this.handleStatusOfCharacterCountButton.bind(this));
    }
}


FooterExtended.prototype.handleSubmitButtonClick = function (e) {
    let $noOption = this.$module.querySelector('#idsk-footer-extended-help-form');
    let $errorOption = this.$module.querySelector('#idsk-footer-extended-error-form');
    let $infoQuestion = this.$module.querySelector('#idsk-footer-extended-info-question');
    let $heartSymbol = this.$module.querySelector('#idsk-footer-extended-heart');
    let $feedbackQuestion = this.$module.querySelector('.idsk-footer-extended-heading-feedback');

    $noOption.classList.add('idsk-footer-extended-display-hidden');
    $errorOption.classList.add('idsk-footer-extended-display-hidden');
    $noOption.classList.remove('idsk-footer-extended-open');
    $errorOption.classList.remove('idsk-footer-extended-open');

    toggleClass($infoQuestion, 'idsk-footer-extended-heart');
    toggleClass($heartSymbol, 'idsk-footer-extended-heart-visible');
    toggleClass($feedbackQuestion, 'idsk-footer-extended-display-none');
}

FooterExtended.prototype.handleStatusOfCharacterCountButton = function (e) {
    let $textAreaCharacterCount = this.$module.querySelector('#with-hint');
    let $remainingCharacterCountMessage = this.$module.querySelector('#with-hint-info');

    let $submitButton = this.$module.querySelector('#submit-button-error-form');

    setTimeout(function () {
        if ($textAreaCharacterCount.classList.contains('govuk-textarea--error') || $remainingCharacterCountMessage.classList.contains('govuk-error-message')) {
            console.log('yes');
            console.log($textAreaCharacterCount.classList);
            $submitButton.disabled = true;
        } else {
            console.log('no');
            console.log($textAreaCharacterCount.classList);
            $submitButton.disabled = false;
        }
    }, 300);
}


//Hiding feedback question text and showing thank notice with heart
FooterExtended.prototype.handleYesButtonClick = function (e) {
    let $noOption = this.$module.querySelector('#idsk-footer-extended-help-form');
    let $errorOption = this.$module.querySelector('#idsk-footer-extended-error-form');
    let $infoQuestion = this.$module.querySelector('#idsk-footer-extended-info-question');
    let $heartSymbol = this.$module.querySelector('#idsk-footer-extended-heart');

    $noOption.classList.add('idsk-footer-extended-display-hidden');
    $errorOption.classList.add('idsk-footer-extended-display-hidden');

    toggleClass($infoQuestion, 'idsk-footer-extended-heart');
    toggleClass($heartSymbol, 'idsk-footer-extended-heart-visible');
}


//Hiding feedback question element and showing help form with animation
FooterExtended.prototype.handleNoButtonClick = function (e) {
    let $helpOption = this.$module.querySelector('#idsk-footer-extended-help-form');
    let $feedbackQuestion = this.$module.querySelector('.idsk-footer-extended-heading-feedback');

    toggleClass($feedbackQuestion, 'idsk-footer-extended-display-none');
    toggleClass($helpOption, 'idsk-footer-extended-display-hidden');
    toggleClass($helpOption, 'idsk-footer-extended-open');
}

//Hiding feedback question element and showing error form with animation
FooterExtended.prototype.handleErrorButtonClick = function (e) {
    let $errorOption = this.$module.querySelector('#idsk-footer-extended-error-form');
    let $helpOption = this.$module.querySelector('#idsk-footer-extended-help-form');
    let $feedbackQuestion = this.$module.querySelector('.idsk-footer-extended-heading-feedback');

    toggleClass($feedbackQuestion, 'idsk-footer-extended-display-none');
    $helpOption.classList.add('idsk-footer-extended-display-hidden');
    $helpOption.classList.remove('idsk-footer-extended-open');
    toggleClass($errorOption, 'idsk-footer-extended-display-hidden');
    toggleClass($errorOption, 'idsk-footer-extended-open');
}

//Hiding error form with animation and showing feedback question element
FooterExtended.prototype.handleCloseErrorFormButtonClick = function (e) {
    let $errorOption = this.$module.querySelector('#idsk-footer-extended-error-form');
    let $feedbackQuestion = this.$module.querySelector('.idsk-footer-extended-heading-feedback');

    toggleClass($feedbackQuestion, 'idsk-footer-extended-display-none');
    toggleClass($errorOption, 'idsk-footer-extended-open');
    toggleClass($errorOption, 'idsk-footer-extended-display-hidden');
}

//Hiding help form with animation and showing feedback question element
FooterExtended.prototype.handleCloseHelpFormButtonClick = function () {
    let $helpOption = this.$module.querySelector('#idsk-footer-extended-help-form');
    let $feedbackQuestion = this.$module.querySelector('.idsk-footer-extended-heading-feedback');

    toggleClass($feedbackQuestion, 'idsk-footer-extended-display-none');
    toggleClass($helpOption, 'idsk-footer-extended-open');
    toggleClass($helpOption, 'idsk-footer-extended-display-hidden');
}

export default FooterExtended