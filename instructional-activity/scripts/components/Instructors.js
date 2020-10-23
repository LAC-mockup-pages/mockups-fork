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

export const createInstructorBloc = () => {
  return "<div><h2>Additional Info Bloc</h2></div>";
};
