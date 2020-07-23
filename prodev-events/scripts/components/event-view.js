// event-view after selecting an avent in list

import { createRosterBloc } from "./roster-view.js";
import { sessionList, providerList } from "./../main.js";

const createViewBloc = (fieldList, selectObj) => {
  let bloc = "";
  const selectList = Object.keys(selectObj);
  for (const field of fieldList) {
    let keyVal = $(field).attr("data-name"),
      labelVal = $(field).attr("data-label"),
      value = $(field).text();
    if (selectList.includes(keyVal)) {
      // const { hashTable, optionText } = selectObj[keyVal];
      // bloc += elementSelectModal({
      //   hashTable,
      //   keyValue: keyVal,
      //   selectedValue: value,
      //   labelVal,
      //   labelClassVal: "",
      //   option: "",
      //   optionText,
      // });
    } else {
      let optionHidden = " form-group";
      if (keyVal === "ID") optionHidden += " hidden";
      bloc += elementInput({
        keyVal,
        labelVal,
        value,
        labelClassVal: "",
        classVal: "",
        option: "",
        optionHidden,
      });
    }
  }
  return bloc;
};

export const createEventView = (tdList) => {
  const filteredList = tdList.reduce((accumulator, item) => {
    const fieldName = $(item).attr("data-name");
    if (!fieldName.startsWith("profdev")) accumulator.push(item);
    return accumulator;
  }, []);
  const fullLength = filteredList.length;
  const halfLength = Math.ceil(fullLength / 2);
  let rosterBloc = createRosterBloc();

  console.log("filteredList :>> ", filteredList);

  const selectElementObj = {
    ProfDevDescription: { hashTable: sessionList, optionText: "a session" },
    ProfDevProviderID: { hashTable: providerList, optionText: "a provider" },
    // "ProfDevLocationID",
    // "ProfDevCategoryID",
    // "ProfDevSubjectID",
    // "ProfDevFacilitator1",
    // "ProfDevFacilitator2",
    // "ProfDevFacilitator3",
  };

  const leftBloc = createViewBloc(
    filteredList.slice(0, halfLength),
    selectElementObj
  );
  const rightBloc = createViewBloc(
    filteredList.slice(halfLength),
    selectElementObj
  );

  const eventView = `${rosterBloc}
  <form role="form" id="event-view-form" class="container-fluid row event-view">
      <div class="col-md-6 left-event-view">${leftBloc}</div>
      <div class="col-md-6 right-event-view">${rightBloc}</div>
      <button type="button" id="save-changes-btn" form="event-view-form" class="btn btn-primary">Save Changes</button>
      <button type="button" id="cancel-changes-btn" form="event-view-form" class="btn btn-default">Cancel</button>
    </form>
  `;
  return eventView;
};
