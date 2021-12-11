const identifyChange = (inputs, dataObj, indexInputs, totalObjs, signPlus) => {
  // return the modified obj
  const id = inputs.id;
  const value = inputs.value;
  totalObjs = signPlus ? totalObjs - 1 : totalObjs + 1;
  dataObj.splice(
    dataObj.findIndex((eI) => eI.id === id),
    1
  );
  return dataObj.push({ id, value, key: indexInputs });
};

export default identifyChange;
