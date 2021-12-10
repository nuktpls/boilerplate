import slideDown from './slide-down-container';

const showHideTerms = (target, action) => {
  if (action === 'show') {
    return (target.style.display = 'flex');
  }
  if (action === 'hide') {
    if (target.style.display != 'none') {
      for (let index = 0; index < 1; index++) {
        return slideDown(target, 200);
      }
    }
  }
};

export default showHideTerms;
