// Course data not required but recommended
// dataObj is output of a GET request (GetCourse) or created
// by the DB response after new record creation

const createSpecialProgram = (programID, subIETId) => {
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
    optionHidden: " input-field",
    type: "text"
  });

  const bloc = `
  <div class="container-fluid col-md-6">
    <form role="form" id="#site-tot-students">
      ${siteSelect}
      ${projectedEnrollment}
    </form>
  </div>`;

  return bloc;
};
