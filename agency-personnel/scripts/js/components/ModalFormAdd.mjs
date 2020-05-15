const createForm = (formName) => {
  const firstRowID = `#${formName}-0 td`;
  const firstRow = $(firstRowID).get();
  const result = [];
  console.log("firstRow :>> ", firstRow);

  for (const cell of firstRow) {
    const optionHidden = $(cell).attr("class").includes("hidden")
      ? "hidden"
      : "";
    const fieldName = $(cell).attr("data-field");
    const labelVal = $(cell).attr("data-label")
      ? $(cell).attr("data-label")
      : "";
    result.push([fieldName, optionHidden, labelVal]);
  }
  console.log("result :>> ", result);
  return `Form to add a record ${formName}`;
};

export default createForm;
