//* =======================================
//* Populating element values from selected data object
//* generated by first request to server.
//* Sections: Population categories
//* =======================================

import { createOptionList } from "../main.js";

// Data sources: /original-data/student-data-additional.js/GetStudent_Additional
//            /data-server.js/ddlPopulation
export const populationValues = (obj) => {
  const {
    Correctional,
    Institutionalized,
    HeadHouse,
    OtherEd,
    Veteran,
    DislocatedWorker,
    EmployedAt200P,
    RuralResident,
    FamilyLiteracy,
    Parole,
    CommCorrection,
    OtherPopulation,
    OtherDescription
  } = obj;
  const valuesObj = {
    Correctional,
    Institutionalized,
    HeadHouse,
    OtherEd,
    Veteran,
    DislocatedWorker,
    EmployedAt200P,
    RuralResident,
    FamilyLiteracy,
    Parole,
    CommCorrection,
    OtherPopulation,
    OtherDescription
  };
  const fieldsWithAnswer = Object.keys(valuesObj).filter(
    (key) => valuesObj[key] !== "2"
  );
  const formContent = [];
  for (const key of fieldsWithAnswer) {
    const optionList = createOptionList(ddlPopulation, key);
    const optionListYesNoNA = createOptionList(
      [
        { key: "0", value: "No" },
        { key: "1", value: "Yes" },
        { key: "2", value: "No answer" }
      ],
      valuesObj[key]
    );
    const row = `
    <div class="input-field form-group col-sm-10">
      <select class="modal-select" name=${key} disabled>
        ${optionList}
      </select>
    </div>
    <div class="input-field form-group col-sm-2">
      <select class="modal-select" name=${key + "-value"} disabled>
        ${optionListYesNoNA}
      </select>
    </div>`;
    formContent.push(row);
  }
  $(".population-form").append(
    `<div class="row">
      ${formContent.join("")}
    </div>`
  );
};
