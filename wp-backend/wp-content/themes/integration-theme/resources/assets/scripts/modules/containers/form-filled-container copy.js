import fadeIn from "./fade-in-container";
import fadeOut from "./fade-out-container";

const isFormFilled = (
  config,
  filledForm,
  data,
  submitHandler,
  successElement
) => {
  console.log("DEU TUDO CERTO PODE ENVIAR");
  document.cookie = "dataForm=" + JSON.stringify(filledForm) + ",signUp=true";
  data.formData = JSON.stringify(filledForm);
  data.configTo = data.configTo;
  data.configSubject = data.configSubject;
  data.configBody = data.configBody;
  data.configHeadersFrom = data.configHeadersFrom;
  data.configHeadersCC = data.configHeadersCC;
  const submitHandlerConst = submitHandler(config, data);
  const errorElement = document.getElementById(config.errorElement);
  document.getElementById(config.submitFormBtn).removeAttribute("disabled");
  document
    .getElementById(config.submitFormBtn)
    .addEventListener("click", function (es) {
      const form = document.getElementById("sign-up-form");

      // habilitar submit login
      const whatHere = document.cookie
        ? document.cookie.includes("signUp=true")
        : null;
      if (whatHere[1] === true) {
        document.getElementById("wp-submit").removeAttribute("disabled");
      }

      fadeOut(form, 100);
      window.setTimeout(() => {
        document.getElementById("loading-img").style.display = "block";
      }, 100);
      form.style.display = "none";
      window.setTimeout(() => null, 500); // xxx
      window.setTimeout(() => {
        document.getElementById("loading-img").style.display = "none";
      }, 1000);

      // submit.onload XMLHttpRequest function
      // on load request response
      // onLoadResponse(submitHandlerConst, config, errorElement);
      submitHandlerConst.onload = function (e) {
        console.log("clicou e deu load");
        let responseRequest =
          submitHandler.response &&
          submitHandler.response.data &&
          submitHandler.response.data.type
            ? submitHandler.response.data.type
            : null;

        responseRequest = submitHandlerConst.response.data.type;
        if (responseRequest === "error") {
          console.log("error no envio de email");
          // console.log(submitHandlerConst);
        } else if (!responseRequest) {
          console.log("warn no envio de email");
          // console.log(submitHandlerConst);
        } else if (responseRequest === "success") {
          console.log("success no envio de email");
          fadeIn(successElement, 1200);
          document
            .getElementById(config.submitFormBtn)
            .setAttribute("disabled", true);
          document.getElementById("cadastro-modal-label").innerText = "";
        } else {
          errorElement.innerText = config.errorMsg;
          fadeIn(errorElement, 1200);

          return console.log("unknow request/response");
        }
      };
    });
  // console.log(document.cookie);
  // sending data here

  // on congif wp submit master btn go ! function abaixo
  // fazer a mask dos form
};

export default isFormFilled;
