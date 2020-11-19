// Course data not required but recommended
// dataObj is output of a GET request (GetCourse) or created
// by the DB response after new record creation

import { topBanner, tableBody } from "../main.js";
const specialProgramList = GetSpecialProgram.slice(0).sort((item1, item2) =>
  item1.ProgramDesc < item2.ProgramDesc
    ? -1
    : item1.ProgramDesc > item2.ProgramDesc
    ? 1
    : 0
);
const specialPrgmSource = GetSpecialProgramSource.slice(0);
const instructionList = GetInstructionSource.slice(0);

const createSpecialProgramView = (programID = "", subIETId = "") => {
  const title = "Special Program";
  const hiddenFields = [
    "ID",
    "SpecialProgramID",
    "Class_PKID",
    "IET_Class_PKID"
  ];
  const labelObj = { ProgramDesc: "Program", InstructionDesc: "Description" };

  const header = topBanner(title, [
    ["Program", "col-sm-5"],
    ["Description", "col-sm-7"]
  ]);

  const body = tableBody(
    specialProgramList,
    title,
    hiddenFields,
    labelObj,
    "GetSpecialProgram"
  );
  return header + body;
};

export const createRecommended = (
  siteInfo = [],
  projectedStudentsNumber = ""
) => {
  const siteSelect = elementInput({
    keyVal: "SiteID",
    labelVal: "Site",
    value: siteInfo[0],
    labelClassVal: "",
    classVal: "",
    option: `disabled data-key=${siteInfo[1]}`,
    optionHidden: "form-group",
    type: "text"
  });

  const projectedEnrollment = elementInput({
    keyVal: "ProjTotStudents",
    labelVal: "Projected Enrollment",
    value: projectedStudentsNumber,
    labelClassVal: "",
    classVal: "",
    option: "disabled data-key=''",
    optionHidden: "form-group",
    type: "text"
  });

  const specialProgramBloc = createSpecialProgramView();

  const bloc = `
  <div class="container-fluid recommended-fields col-md-6">
    <form role="form" class="field-bloc" id="site-tot-students"
      data-toggle="tooltip" data-placement="left"
      data-original-title="Click to Edit">
      ${siteSelect}
      ${projectedEnrollment}
    </form>
  </div>

  <div class="container-fluid recommended-fields col-md-6" id="special-program">
   ${specialProgramBloc}
 </div>`;

  return bloc;
};

export const addSpecialProgram = (rowId = "", tableName = "") => {
  let programCode,
    descriptionCode = "";
  if (rowId) {
    const selectedProgram = specialProgramList.find(
      (record) => record.ID === rowId
    );
    const { SpecialProgramID, IET_Class_PKID } = selectedProgram;
    programCode = SpecialProgramID;
    descriptionCode = IET_Class_PKID;
  }

  const program = elementSelectModal({
    hashTable: specialPrgmSource,
    keyValue: "SpecialProgramID",
    selectedValue: programCode,
    labelVal: "Program",
    labelClassVal: "",
    option: "",
    optionText: "a special program"
  });
  const disabled = rowId && programCode === "IET" ? "" : "disabled";

  const description = elementSelectModal({
    hashTable: instructionList,
    keyValue: "IET_Class_PKID",
    selectedValue: descriptionCode,
    labelVal: "Instruction Description",
    labelClassVal: "",
    option: disabled,
    optionText: "an instruction description"
  });
  return `${program}${description}`;
};
