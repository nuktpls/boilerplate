import VMasker from "./containers/masker";
import checkTermsCookies from "./containers/check-terms-container";
const cookiesOnLoad = () => {
  console.log("COOKIES LOADED ");

  // hack time, helper for bootstrap lost black bg
  const blackBg = document.getElementsByClassName("modal-backdrop");
  const closeBtn = document.getElementById("modal-btn-close");
  closeBtn.addEventListener("click", function () {
    for (let index = 0; index < blackBg.length; index++) {
      const element = blackBg[index];
      element.classList.add("remove");
      element.remove();
    }
  });
  //
  document.addEventListener("change", function () {
    checkTermsCookies();
  });
  document.onreadystatechange = function () {
    function inputHandler(masks, max, event) {
      var c = event.target;
      var v = c.value.replace(/\D/g, "");
      var m = c.value.length > max ? 1 : 0;
      VMasker(c).unMask();
      VMasker(c).maskPattern(masks[m]);
      c.value = VMasker.toPattern(v, masks[m]);
    }

    var telMask = ["(99) 9999-99999", "(99) 99999-9999"];
    var tel = document.getElementById("telNo");
    VMasker(tel).maskPattern(telMask[0]);
    tel.addEventListener(
      "input",
      inputHandler.bind(undefined, telMask, 14),
      false
    );

    var docMask = ["999.999.999-999", "99.999.999/9999-99"];
    var doc = document.getElementById("dadosEmpresa");
    VMasker(doc).maskPattern(docMask[0]);
    doc.addEventListener(
      "input",
      inputHandler.bind(undefined, docMask, 14),
      false
    );
    checkTermsCookies();
  };
};

export default cookiesOnLoad;
