import submitHandler from "./submit-handler-container";
import identifyChange from "./contact-identify-changes";
import isFormFilled from "./form-filled-container copy";
import isFormNotFilled from "./form-not-filled-container";
const formListenerActions = (formsInputs, totalObjs, config, data) => {
  let dataObj = [];
  let filledForm = [];
  const successElement = document.getElementById("modal-message-success");
  // const errorModalElement = document.getElementById("modal-message-error");
  successElement.innerHTML = config.successMsg;
  formsInputs.map((inputs, indexInputs) => {
    inputs.addEventListener("input", function () {
      // hack
      const cpfCNPJ = document.getElementById("dadosEmpresa");
      if (cpfCNPJ.value.length > 18) {
        document.getElementById("dadosEmpresa").value = document
          .getElementById("dadosEmpresa")
          .value.slice(0, -1);
      }

      let signPlus;
      // listen n modify not empty values
      if (inputs.value !== "" && inputs.value !== " ") {
        signPlus = false;
      }

      identifyChange(inputs, dataObj, indexInputs, totalObjs, signPlus);

      const changedId = dataObj[0].id;
      const changedKey = dataObj[0].key;
      const changedValue = dataObj[0].value;

      filledForm[changedKey] = {
        key: changedId,
        id: changedKey,
        value: changedValue,
      };

      let hasEmpty;
      filledForm.map((e) => {
        if (e.value === "") {
          hasEmpty = true;
        }
      });

      const nomeCompletoArr = document
        .getElementById("nomeCompleto")
        .value.split(" ");

      const nomeCompletoCheck =
        nomeCompletoArr[1] &&
        nomeCompletoArr[0] !== "" &&
        nomeCompletoArr[1] !== ""
          ? true
          : false;

      const telNoCheck =
        document.getElementById("telNo").value.length >= 14 ? true : false;

      const emailEmpresaCheckOne = document
        .getElementById("emailEmpresa")
        .value.includes("@")
        ? true
        : false;

      const emailEmpresaCheckTwo = document
        .getElementById("emailEmpresa")
        .value.includes(".")
        ? true
        : false;

      const emailEmpresaCheckThree =
        document.getElementById("emailEmpresa").value.length >= 8
          ? true
          : false;
      const emailEmpresaCheck =
        emailEmpresaCheckOne && emailEmpresaCheckTwo && emailEmpresaCheckThree
          ? true
          : false;

      const nomeEmpresaCheck =
        document.getElementById("nomeEmpresa").value.length >= 3 ? true : false;

      const dadosEmpresaCheckOne =
        document.getElementById("dadosEmpresa").value.length >= 9
          ? true
          : false;

      const dadosEmpresaCheckTwo =
        document.getElementById("dadosEmpresa").value.length === 14
          ? true
          : false;

      const dadosEmpresaCheckThree =
        document.getElementById("dadosEmpresa").value.length === 18
          ? true
          : false;

      const dadosEmpresaCheckFour =
        document.getElementById("dadosEmpresa").value.length < 19
          ? true
          : false;

      const dadosEmpresaCheck =
        dadosEmpresaCheckOne &&
        dadosEmpresaCheckFour &&
        (dadosEmpresaCheckTwo || dadosEmpresaCheckThree)
          ? true
          : false;
      const mensagemEmpresaCheck =
        document.getElementById("mensagemEmpresa").value.length >= 6
          ? true
          : false;
      const everyThingOk =
        nomeCompletoCheck &&
        telNoCheck &&
        emailEmpresaCheck &&
        nomeEmpresaCheck &&
        dadosEmpresaCheck &&
        mensagemEmpresaCheck
          ? true
          : false;
      if (
        filledForm.length === 6 &&
        !hasEmpty &&
        document.getElementById("sign-up-termos").checked
      ) {
        if (everyThingOk) {
          document.getElementById("modal-message-error").style.display = "none";
          isFormFilled(
            config,
            filledForm,
            data,
            submitHandler,
            successElement,
            everyThingOk
          );
        }
        return true;
      } else {
        document.getElementById("modal-message-error").style.display = "block";
        document.getElementById(
          "modal-message-error"
        ).innerHTML = `<p>Por favor, preencha corretamente o(s) seguinte(s) campo(s):</p>
                  <ul>
                    ${!nomeCompletoCheck ? "<li>Nome e Sobrenome</li>" : ""}
                    ${!telNoCheck ? "<li>Telefone</li>" : ""}
                    ${!emailEmpresaCheck ? "<li>E-mail</li>" : ""}
                    ${!nomeEmpresaCheck ? "<li>Empresa</li>" : ""}
                    ${!dadosEmpresaCheck ? "<li>CPF/CNPJ</li>" : ""}
                    ${!mensagemEmpresaCheck ? "<li>Mensagem</li>" : ""}
                  </ul>`;
        isFormNotFilled(config.submitFormBtn);
        return false;
      }
    });
  });
};

export default formListenerActions;
