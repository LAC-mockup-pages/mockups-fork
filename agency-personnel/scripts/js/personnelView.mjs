//* Viewing personnel info: Person, History, Professional Development

import { getPersonnel } from "./data-server.mjs";

const personView = (selectedID) => {
  const personData = getPersonnel.filter((person) => person.ID === selectedID);
  const {
    PersFirst,
    PersLast,
    PersPositionID,
    PersSubject,
    PersStartDate,
    lengthstay,
    PersPayStatus,
    PersTimeStatus,
    PersExpYears,
    PersHomePhone,
    PersMobilePhone,
    PersEmail,
    PersAltEmail,
  } = personData;

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
};

export default personView;
