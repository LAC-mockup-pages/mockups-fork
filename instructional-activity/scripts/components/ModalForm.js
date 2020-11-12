export const createModalForm = (fieldList) => {
  const list = [];
  const fieldsWithInput = ["CourseID", "ClassID", "StartDate", "EndDate", "FY"];
  const fieldsWithSelect = {
    ClassType: [GetInstructionType, "a type"],
    InstructorID: [GetInstructor, "an instructor"],
    UpperLevel: [ddlLevel, "a level"],
    Format: [ddlFormat, "a format"]
  };

  $(fieldList).each(function (indx) {
    const $elements = $(this)
      .children()
      .removeAttr("id")
      .removeAttr("disabled");
    const labelText = $elements[0].innerText;
    const $inputElement = $elements[1];
    const keyValue = $inputElement.name;
    if (fieldsWithInput.includes(keyValue)) {
      list.push($(this));
    } else {
      let [hashTable, optionText] = fieldsWithSelect[keyValue];

      if (keyValue === "InstructorID") {
        hashTable = hashTable.map((item) => {
          const { InstructorName, PersonnelID } = item;
          return { PersonnelID, InstructorName };
        });
      }
      const selectedValue = $inputElement.dataset.key;
      const elementSelect = elementSelectModal({
        hashTable,
        keyValue,
        selectedValue,
        labelVal: labelText,
        labelClassVal: "",
        option: "",
        optionText
      });
      list.push(elementSelect);
    }
  });

  return list;
};
