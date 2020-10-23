// Bloc for main instructor and additional intructors

const instructorList = GetInstructor.slice(0).sort((name1, name2) =>
  name1.InstructorName < name2.InstructorName
    ? -1
    : name1.InstructorName > name2.InstructorName
    ? 1
    : 0
);

const classInstructorList = GetClassInstructor.slice(0).sort((name1, name2) =>
  name1.Name < name2.Name ? -1 : name1.Name > name2.Name ? 1 : 0
);

const instructorsBloc = () => {
  return "<div class='col-md-6'><h3>Instructors Bloc</h3></div>";
};

const additionalInfoBloc = () => {
  return "<div class='col-md-6'><h3>All the other info</h3></div> ";
};

export const createAdditionalBloc = () => {
  return `${instructorsBloc()}${additionalInfoBloc()}`;
};
