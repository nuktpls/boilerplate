import submitHandler from "./submit-handler-container";
import hideTerms from "./terms-ribbon-hide-container.js";
import modalIntegration from "./bootstrap-modal-integration-container";

const termsStatus = (config) => {
  if (document.readyState !== "loading") {
    const data = {
      action: config.statusCookieAction,
    };
    // setting up submit function
    const submitStatusHandler = submitHandler(config, data);
    submitStatusHandler.onload = function () {
      window.term = submitStatusHandler.response.data.type;
      if (submitStatusHandler.response.data.type === "warn") {
        // if there is some cookie term play animation hide ribbon
        hideTerms(document.getElementById(config.termsRibbonId), 20);
        document.cookie = "signUp=true";
      } else {
        // on.load/window.cache!=true
        // show terms modal
        config.termsOnLoad ? modalIntegration(config) : null;
      }
    };
  }
};

export default termsStatus;
