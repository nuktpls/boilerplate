import config from './config/terms-ribbon';
import termsStatus from './containers/terms-status-get-container';
import termsSubmitBtnListener from './containers/terms-submit-btn-listener-container';

const TermsActions = () => {
  // on loading get terms cookie status
  termsStatus(config);

  // listen submit btn
  termsSubmitBtnListener(config, config.acceptBtn);
};

export default TermsActions;
