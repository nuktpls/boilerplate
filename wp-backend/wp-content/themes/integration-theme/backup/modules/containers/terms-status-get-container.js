import showHideTerms from './terms-ribbon-show-hide-container';

const termsStatus = (config) => {
  if (document.readyState !== 'loading') {
    // setting up submit function
    const cookieSignup = document.cookie
      ? document.cookie.includes('terms=true')
      : null;
    if (!cookieSignup) {
      // change showHideTerms por notLoaded terms
      showHideTerms(document.getElementById(config.termsRibbonId), 'show');
    }
  }
};

export default termsStatus;
