//* New record entry bloc

export const createNewRecordForm = () => {
  let formNewRecord = [];
  const instructionTypeList = GetInstructionType.slice(0);
  const instructorList = GetInstructor.slice(0).map((person) => {
    const { InstructorName, PersonnelID } = person;
    return { PersonnelID, InstructorName };
  });
  const levelList = [
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
    { key: "6", value: "6" }
  ];
  const formatList = ddlFormat.slice(0);

  const labelList = {
    CourseID: "Course ID",
    StartDate: "Begin (MM/DD/YYYY)",
    EndDate: "End (MM/DD/YYYY)"
  };
  const selectList = {
    ClassType: ["Type", instructionTypeList],
    InstructorID: ["Instructor", instructorList],
    UpperLevel: ["Level", levelList],
    Format: ["Format", formatList]
  };

  for (const key in labelList) {
    let type = "";
    formNewRecord.push(
      inputNoLabel({
        key,
        placehold: labelList[key],
        classOption: "",
        option: ` required title='Please fill this field' data-toggle='tooltip' data-placement='bottom'`,
        type
      })
    );
  }

  for (const keyValue in selectList) {
    const hashTable = selectList[keyValue][1];
    const option =
      "required title='Please fill this field' data-toggle='tooltip' data-placement='bottom'";
    const optionText = selectList[keyValue][0];
    formNewRecord.push(
      elementSelectNewRecord({
        hashTable,
        keyValue,
        option,
        optionText,
        classOption: ""
      })
    );
  }

  const formContent =
    formNewRecord.join("") +
    `<div class="container-fluid row buttons-bloc-new">
  <div class="col-md-9"></div>
        <div class="col-md-3"><button type="button" id="submit-btn" form="new-entry"
      class="btn dark-blue-text blue-light-bg">Add</button>
<button type="button" id="cancel-btn" form="new-entry"
      class="btn btn-default">Cancel</button></div>
  </div>`;
  return formContent;
};
