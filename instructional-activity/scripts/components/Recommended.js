// Course data not required but recommended
// dataObj is output of a GET request (GetCourse) or created
// by the DB response after new record creation

const createSpecialProgram = (programID = "", subIETId = "") => {
  const hashTable = GetSpecialProgramSource.slice(0);
  const IETActivityList = GetIOActivity.slice(0).map((activity) => {
    const { ID, InstructionDescription } = activity;
    return { ID, InstructionDescription };
  });

  const IETSelect = elementSelectModal({
    hashTable: IETActivityList,
    keyValue: "IET_Class_PKID",
    selectedValue: "",
    labelVal: "Description",
    labelClassVal: "",
    option: " disabled",
    optionText: "an instruction"
  });

  const specialProgramSelect = elementSelectModal({
    hashTable,
    keyValue: "SpecialProgramID",
    selectedValue: programID,
    labelVal: "Special Program",
    labelClassVal: "",
    option: "",
    optionText: "a special program"
  });

  const specialProgramBloc = `<div class="container-fluid col-md-6">
  <form role="form" id="#special-program">
    ${specialProgramSelect}
    ${IETSelect}
  </form>
</div>`;

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
    <form role="form" id="#site-tot-students">
      ${siteSelect}
      ${projectedEnrollment}
    </form>
  </div>
  ${specialProgramBloc}`;

  return bloc;
};
