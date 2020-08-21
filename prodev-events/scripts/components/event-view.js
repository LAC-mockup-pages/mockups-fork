// event-view after selecting an avent in list

import { rosterView } from "./roster-view.js";
import {
  providerList,
  locationList,
  categoryList,
  subjectList,
  facilitatorList
} from "./../main.js";

const createViewBloc = (fieldList, selectObj, requiredList) => {
  let bloc = "";
  const selectList = Object.keys(selectObj);
  for (const field of fieldList) {
    let keyVal = $(field).attr("data-name"),
      labelVal = $(field).attr("data-label"),
      value = $(field).text(),
      labelClassVal = "",
      option = "";

    if (requiredList.includes(keyVal)) {
      labelClassVal = "class='red-text'";
      option = "required";
    }

    if (keyVal === "ProfDevFY") option += " disabled";
    if (keyVal === "ProfDecSubjectID") {
      const categoryObj = fieldList.find(
        (item) => item.name === "ProfDevCategoryID"
      );
      option += [52, 53, 58].includes(categoryObj.value) ? "" : " disabled";
    }
    if (selectList.includes(keyVal)) {
      const { hashTable, optionText } = selectObj[keyVal];
      bloc += elementSelectModal({
        hashTable,
        keyValue: keyVal,
        selectedValue: value,
        labelVal,
        labelClassVal,
        option,
        optionText
      });
    } else {
      let optionHidden = " form-group";
      if (keyVal === "ID") optionHidden += " hidden";
      bloc += elementInput({
        keyVal,
        labelVal,
        value,
        labelClassVal,
        classVal: "",
        option,
        optionHidden
      });
    }
  }
  return bloc;
};

export const createEventView = (tdList, requiredList) => {
  const filteredList = tdList.reduce((accumulator, item) => {
    const fieldName = $(item).attr("data-name");
    if (!fieldName.startsWith("profdev")) accumulator.push(item);
    return accumulator;
  }, []);
  const fullLength = filteredList.length;
  const halfLength = Math.ceil(fullLength / 2);
  const eventId = $(filteredList[0]).text();
  //! Modify with variable name for event ID
  let rosterBloc = rosterView(eventId);

  const facilitators = facilitatorList.map((item) => {
    const { ID, FacFirstName, FacLastName } = item;
    const name = `${FacLastName}, ${FacFirstName}`;
    return { ID, name };
  });
  const selectElementObj = {
    ProfDevProviderID: { hashTable: providerList, optionText: "a provider" },
    ProfDevLocationID: { hashTable: locationList, optionText: "a location" },
    ProfDevCategoryID: { hashTable: categoryList, optionText: "a category" },
    ProfDevSubjectID: { hashTable: subjectList, optionText: "a subject" },
    ProfDevFacilitator1: {
      hashTable: facilitators,
      optionText: "a facilitator"
    },
    ProfDevFacilitator2: {
      hashTable: facilitators,
      optionText: "a facilitator"
    },
    ProfDevFacilitator3: {
      hashTable: facilitators,
      optionText: "a facilitator"
    },
    RAENEvent: {
      hashTable: [
        { num: "0", text: "No" },
        { num: "1", text: "Yes" }
      ]
    }
  };

  const leftBloc = createViewBloc(
    filteredList.slice(0, halfLength),
    selectElementObj,
    requiredList
  );
  const rightBloc = createViewBloc(
    filteredList.slice(halfLength),
    selectElementObj,
    requiredList
  );

  const eventView = `${rosterBloc}
  <form role="form" id="event-view-form" class="container-fluid row event-view">
      <div class="col-md-6 left-event-view">${leftBloc}</div>
      <div class="col-md-6 right-event-view">${rightBloc}</div>
  </form>
    <div class="container-fluid row buttons-bloc-new">
      <div class="col-md-7"></div>
      <div class="col-md-5">
        <button type="button" id="event-view-cancel-btn" form="event-view-form" class="btn btn-default">Cancel without saving</button>        <button type="button" id="event-view-submit-btn" form="event-view-form" class="btn dark-blue-text blue-light-bg">Save</button>
      </div>
    </div>`;
  return eventView;
};
