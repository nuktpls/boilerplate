import formListenerActions from "./containers/form-listener-actions-container";
import configSignupRequest from "./config/signup-request";

const requestSignupResolver = () => {
  const form = document.getElementById(configSignupRequest.form);
  Object.values(form).reduce((obj, field) => {
    obj[field.name] = field.value;
    // console.log(obj);
    return obj;
  }, {});

  const contactName = document.getElementById(
    configSignupRequest.contactNameId
  );
  const phoneNumber = document.getElementById(
    configSignupRequest.phoneNumberId
  );
  const businessEmail = document.getElementById(
    configSignupRequest.businessEmailId
  );
  const businessName = document.getElementById(
    configSignupRequest.businessNameId
  );
  const businessCountryRegister = document.getElementById(
    configSignupRequest.businessCountryRegisterId
  );
  const contactMessage = document.getElementById(
    configSignupRequest.contactMessageId
  );

  let formsInputs = [
    contactName,
    phoneNumber,
    businessEmail,
    businessName,
    businessCountryRegister,
    contactMessage,
  ];

  let myInputsArr = [];
  for (let indxForm = 0; indxForm < formsInputs.length; indxForm++) {
    const theInput = formsInputs[indxForm];
    myInputsArr.push({ key: indxForm, id: theInput, value: null });
  }

  const data = {
    action: configSignupRequest.action,
    configTo: configSignupRequest.configTo,
    configSubject: configSignupRequest.configSubject,
    configBody: configSignupRequest.configBody,
    configHeadersFrom: configSignupRequest.configHeadersFrom,
    configHeadersCC: configSignupRequest.configHeadersCC,
  };

  const config = {
    ajax_url: configSignupRequest.ajax_url,
    redirect: configSignupRequest.redirect,
    errorElement: configSignupRequest.errorElement,
    successElement: configSignupRequest.successElement,
    successMsg: configSignupRequest.successMsg,
    errorMsg: configSignupRequest.errorMsg,
    submitFormBtn: configSignupRequest.submitFormBtn,
  };

  let totalObjs = formsInputs.length;

  formListenerActions(formsInputs, totalObjs, config, data);
};
export default requestSignupResolver;
