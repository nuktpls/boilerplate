import config from "./config/terms-ribbon";
import termsContainer from "./containers/terms-container";
import termsStatus from "./containers/terms-get-status-container";

const TermsActions = () => {
  // on loading get terms cookie status
  termsStatus(config);
  // terms accept buttons listening multiple id's
  // avoid acceptance without reading the terms
  // multiple checkbox acceptance
  termsContainer(config.acceptCheckbox, config.acceptBtns, config);

  // RESET FUNCTION 4Dev
  // to use reset cookie function, you must to paste the follow code into
  // ```views/components/login/termos.blade.php
  //   <button id="termos-reset" class="termos-reset btn btn-primary border-0 ms-2 ms-xl-0 rounded text-white">
  //     RESET COOKIES
  //   </button>
  // ```
  // then uncomment these js reset codes
  // EOF >>
  // document
  //   .getElementById("termos-reset")
  //   .addEventListener("click", function () {
  //     const data = {
  //       action: config.resetCookieAction,
  //       isTrue: false,
  //     };
  //     const submitResetHandler = submitHandler(config, data);
  //     submitResetHandler.onload = function () {
  //       console.log("Reseting cookies?");
  //       if (submitResetHandler.response.data.type === "success") {
  //         console.log("Cookie reseted.");
  //         console.log(submitResetHandler.response);
  //       } else if (submitResetHandler.response.data.type === null) {
  //         console.log("No cookies to be reseted.");
  //       }
  //     };
  //   });
  // EOF;
};

export default TermsActions;
