export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades.filter((grade) => student.id === grade.studentId);
      const Grade = grades.length > 0 ? grades.reduce((a, b) => a + b.grade, 0) / grades.length : 0;
      return { ...student, grade: Grade };
    });
}
