//* Viewing personnel info: Person, History, Professional Development

import { getPersonnel } from "./data-server.mjs";

const personView = (selectedID) => {
  const personData = getPersonnel.filter(
    (person) => person.ID === selectedID.toString()
  )[0];

  const labels = {
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
    const keyVal = key;
    const labelClassVal = "";
    const labelVal = labels[key];
    const classVal = "";
    const value = personData[key];
    const option = "";
    const argsObj = {
      keyVal,
      labelClassVal,
      labelVal,
      classVal,
      value,
      option,
    };

    return elementInput(argsObj);
  });

  return fields.join("");
};

export default personView;
