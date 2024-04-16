function getListStudentIds(studentsArray) {
  if (!Array.isArray(studentsArray)) {
    return [];
  }

  return studentsArray.map((student) => student.id);
}

export default getListStudentIds;
