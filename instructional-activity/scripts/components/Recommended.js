// Course data not required but recommended
// dataObj is output of a GET request (GetCourse) or created
// by the DB response after new record creation

import { topBanner } from "../main.js";

const createSpecialProgram = (programID = "", subIETId = "") => {
  // const hashTable = GetSpecialProgramSource.slice(0);
  // const IETActivityList = GetIOActivity.slice(0).map((activity) => {
  //   const { ID, InstructionDescription } = activity;
  //   return { ID, InstructionDescription };
  // });
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
  siteId = "",
  projectedStudentsNumber = ""
) => {
  const siteList = GetSite.slice(0);
  const hashTable = siteList.map((site) => {
    const { SiteID, SiteName } = site;
    return { SiteID, SiteName };
  });

  const siteSelect = elementSelectModal({
    hashTable,
    keyValue: "SiteID",
    selectedValue: siteId,
    labelVal: "Site",
    labelClassVal: "",
    option: "",
    optionText: "a site"
  });

  const projectedEnrollment = elementInput({
    keyVal: "ProjTotStudents",
    labelVal: "Projected Enrollment",
    value: projectedStudentsNumber,
    labelClassVal: "",
    classVal: "",
    option: "",
    optionHidden: "form-group",
    type: "text"
  });

  const specialProgramBloc = createSpecialProgram();

  const bloc = `
  <div class="container-fluid col-md-6">
    <form role="form" id="site-tot-students">
      ${siteSelect}
      ${projectedEnrollment}
    </form>
  </div>
  ${specialProgramBloc}`;

  return bloc;
};
