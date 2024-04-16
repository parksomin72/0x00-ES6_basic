function updateStudentGradeByCity(studentsArray, city, newGrades) {
  return studentsArray
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((gradeObj) => gradeObj.studentId === student.id);

      if (matchingGrade) {
        return { ...student, grade: matchingGrade.grade };
      }

      return { ...student, grade: 'N/A' };
    });
}

export default updateStudentGradeByCity;
