import LoginAjaxRequest from "../modules/login-ajax";
import config from "../modules/config/login-form";
import TermsActions from "../modules/terms";
import requestSignupResolver from "../modules/request-signup";
import cookiesOnLoad from "../modules/cookies-onload";

export default {
  init() {
    // JavaScript to be fired on the home page
    // Accept terms button
    new cookiesOnLoad();
    new LoginAjaxRequest(config);
    new TermsActions();
    new requestSignupResolver();
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
