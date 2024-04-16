function getStudentIdsSum(studentsArray) {
  return studentsArray.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;
