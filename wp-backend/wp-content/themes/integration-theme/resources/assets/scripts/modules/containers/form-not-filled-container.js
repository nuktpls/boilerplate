const isFormNotFilled = (submitFormBtn) => {
  document.cookie = "";
  document.getElementById(submitFormBtn).setAttribute("disabled", true);
};

export default isFormNotFilled;
