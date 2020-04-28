//* Viewing personnel info: Person, History, Professional Development

import {
  getPersonnel,
  GetPosition,
  GetSubject,
  ddlTimeStatus,
  ddlExperienceYears,
  ddlPaidVolunteer,
} from "./data-server.mjs";
import { elementSelectWithLabel } from "./main.mjs";

const personView = (selectedID) => {
  const personData = getPersonnel.filter(
    (person) => person.ID === selectedID.toString()
  )[0];

  const labels = {
    PersonnelID: "Personnel ID",
    PersFirst: "First Name",
    PersLast: "Last Name",
    PersPositionID: "Position",
    PersSubject: "Subject",
    PersStartDate: "Start Date",
    lengthstay: "Length of Stay (yrs)",
    PersPayStatus: "Paid/Volunteer",
    PersTimeStatus: "Time Status",
    PersExpYears: "Experience",
    PersHomePhone: "Home Phone",
    PersMobilePhone: "Mobile Phone",
    PersEmail: "Email",
    PersAltEmail: "Alt Email",
  };

  const fieldList = Object.keys(labels);
  const fields = fieldList.map((key) => {
    let labelClassVal = "";
    const labelVal = labels[key];
    const classVal = "";
    const value = personData[key];
    let option = "";

    if (
      [
        "PersonnelID",
        "PersFirst",
        "PersLast",
        "PersPositionID",
        "PersSubject",
        "PersStartDate",
        "PersPayStatus",
        "PersTimeStatus",
        "PersExpYears",
      ].includes(key)
    ) {
      option = "required";
      labelClassVal = "class='red-text'";
    }

    if (key === "lengthstay") option = "disabled";

    const argumentsObj = {
      keyVal: key,
      labelClassVal,
      labelVal,
      classVal,
      value,
      option,
    };

    if (
      [
        "PersPositionID",
        "PersSubject",
        "PersPayStatus",
        "PersTimeStatus",
        "PersExpYears",
      ].includes(key)
    ) {
      let hashTable = [];
      switch (key) {
        case "PersPositionID":
          hashTable = GetPosition;
          break;
        case "PersSubject":
          hashTable = GetSubject;
          break;
        case "PersPayStatus":
          hashTable = ddlPaidVolunteer;
          break;
        case "PersTimeStatus":
          hashTable = ddlTimeStatus;
          break;
        case "PersExpYears":
          hashTable = ddlExperienceYears;
          break;

        default:
          break;
      }
      const argumentsSelect = {
        hashTable,
        keyValue: key,
        selectedValue: personData[key],
        labelVal,
        labelClassVal,
        option,
      };
      return elementSelectWithLabel(argumentsSelect);
    } else {
      return elementInput(argumentsObj);
    }
  });

  return `<div class="person-main col-md-5">
  <div class="sub-header blue-bg blue-light-text" data-blockId="${selectedID}">
    <div class="container-fluid row">
       <div class="sub-header-title">Personnel Information<span>
       <button type="button" form="person-info" class="btn btn-default">Save</button></span>
    </div>
    </div>
  </div>
  <form class="bloc-perso" id="person-info">${fields.join("")}</form>
  </div>`;
};

export default personView;
