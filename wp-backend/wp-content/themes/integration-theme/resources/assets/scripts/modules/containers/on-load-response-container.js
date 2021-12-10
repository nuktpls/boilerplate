import fadeIn from "./fade-in-container";
import fadeOut from "./fade-out-container";

const onLoadResponse = (submitHandler, config, errorElement) => {
  submitHandler.onload = function () {
    const successElement = document.getElementById(config.successElement);
    let responseRequest =
      submitHandler.response &&
      submitHandler.response.data &&
      submitHandler.response.data.type
        ? submitHandler.response.data.type
        : null;
    //is response error || null || other = success
    if (responseRequest === "error") {
      errorElement.innerText = config.errorMsg;
      fadeIn(errorElement, 600);
    } else if (!responseRequest) {
      errorElement.innerText = config.errorMsg;
      fadeIn(errorElement, 600);
    } else if (responseRequest === "success") {
      fadeOut(errorElement, 600);
      errorElement.style.display = "none";
      successElement.innerText = config.successMsg;
      fadeIn(successElement, 600);
      setTimeout(function () {
        console.log("tentando redirect");
        document.location.href = "/";
      }, 500);
    } else {
      return console.log("unknow request");
    }
  };
};
export default onLoadResponse;
