import slideDown from "./slide-down-container";

const hideTerms = (target, duration = 500) => {
  if (target.style.display != "none") {
    for (let index = 0; index < 1; index++) {
      return slideDown(target, duration);
    }
  }
};

export default hideTerms;
