// Course data not required but recommended
// dataObj is output of a GET request (GetCourse) or created
// by the DB response after new record creation

import { topBanner } from "../main.js";

const createSpecialProgram = (programID = "", subIETId = "") => {
  const specialProgramList = GetSpecialProgram.slice(0);
  const header = topBanner("Special Program", [
    ["Program", "col-sm-5"],
    ["Description", "col-sm-7"]
  ]);

  if (specialProgramList.length < 1) return specialProgramBloc;
  let rows = "";
  for (const record of specialProgramList) {
    const { ID, ProgramDesc, InstructionDesc } = record;
    rows += createTableRow(ID, { ProgramDesc, InstructionDesc });
  }
  const specialProgramBloc = `
    <div class="container col-md-6 special-prog-bloc">${header}
      <table class="table table-bordered" id="special-prog-table">
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;

  return specialProgramBloc;
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
    option: `disabled data-site-id=${siteInfo[1]}`,
    optionHidden: "form-group",
    type: "text"
  });

  const projectedEnrollment = elementInput({
    keyVal: "ProjTotStudents",
    labelVal: "Projected Enrollment",
    value: projectedStudentsNumber,
    labelClassVal: "",
    classVal: "",
    option: "disabled",
    optionHidden: "form-group",
    type: "text"
  });

  const specialProgramBloc = createSpecialProgram();

  const bloc = `
  <div class="container-fluid recommended-fields col-md-6">
    <form role="form" class="field-bloc" id="site-tot-students" data-toggle="tooltip" data-placement="left" data-original-title="Click to Edit">
      ${siteSelect}
      ${projectedEnrollment}
    </form>
  </div>
  ${specialProgramBloc}`;

  return bloc;
};
