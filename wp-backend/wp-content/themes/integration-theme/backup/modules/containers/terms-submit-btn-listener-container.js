import setTerms from './terms-status-set-container';
import showHideTerms from './terms-ribbon-show-hide-container';

const termsSubmitBtnListener = (config, btnsId) => {
  // const termsBtnModal = document.getElementById('termos-login__button');
  // btnsIds
  // btn submit event
  const btn = document.getElementById(btnsId);
  btn.addEventListener('click', function () {
    setTerms();
    showHideTerms(document.getElementById(config.termsRibbonId), 'hide');
  });
};
export default termsSubmitBtnListener;
