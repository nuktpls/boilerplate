import submitHandler from "./submit-handler-container";
import hideTerms from "./terms-ribbon-hide-container";

const termsContainer = (checkboxIds, btnsIds, config) => {
  // id's must have empty spacy between their names
  // e.g. listenMultipleClicks("id-one id-two")
  const idCheckboxList = checkboxIds.split(" ");
  let resultsCheckbox = [],
    checkboxItem;
  for (let si = 0; si < idCheckboxList.length; si++) {
    checkboxItem = document.getElementById(idCheckboxList[si]);
    if (checkboxItem) {
      resultsCheckbox.push(checkboxItem);
      // listen the id item click
      checkboxItem.addEventListener("change", function (e) {
        // const termsBtnModal = document.getElementById("termos-modal__button");
        // btnsIds
        const btnList = btnsIds.split(" ");
        let resultsBtn = [],
          itemBtn;
        for (let ai = 0; ai < btnList.length; ai++) {
          itemBtn = document.getElementById(btnList[ai]);
          if (itemBtn) {
            resultsBtn.push(itemBtn);

            // btn submit event
            itemBtn.addEventListener("click", function () {
              const data = {
                action: config.setCookieAction,
              };
              // setting up submit function
              const submitHandlerTermsCookieConst = submitHandler(config, data);
              submitHandlerTermsCookieConst.onload = function () {
                console.log(submitHandlerTermsCookieConst.response.data.type);
              };
              hideTerms(document.getElementById(config.termsRibbonId), 200);
            });

            // btn reactive fx's
            if (e.target.checked !== true) {
              // if last checkbox
              if (si === idCheckboxList.length - 1) {
                // set all checkbox disable false
                resultsCheckbox.map((el) => {
                  el.checked = false;
                });
              }
              if (itemBtn.getAttribute("disabled") !== true) {
                // itemBtn enabled
                itemBtn.setAttribute("disabled", true);
              }
              // not .checked
            } else {
              resultsCheckbox.map((el) => {
                // set all checkbox disable true
                el.checked = true;
              });
              if (itemBtn.getAttribute("disabled")) {
                // declare exceptions disables
                const exceptionsBtns = config.acceptBtnsException;
                const btnsExceptions = exceptionsBtns.split(" ");
                for (
                  let indexExc = 0;
                  indexExc < btnsExceptions.length;
                  indexExc++
                ) {
                  const btnExc = btnsExceptions[indexExc];
                  if (itemBtn.id !== btnExc) {
                    // disable only btns without exeptions
                    itemBtn.removeAttribute("disabled");
                  } else {
                    return false;
                  }
                }
              }
            }
          }
        }
      });
    }
  }
  return resultsCheckbox;
};
export default termsContainer;
// declare exceptions disables
// const excBtns = config.acceptBtnsException;
// const btnsExc = excBtns.split(" ");
// for (
//   let iExc = 0;
//   iExc < btnsExc.length;
//   iExc++
// ) {
//   const btnExc = btnsExc[iExc];
//   if (itemBtn.id !== btnExc) {
//     // disable only btns without exeptions
//     itemBtn.removeAttribute("disabled");
//   } else {
//     return false;
//   }
// }
