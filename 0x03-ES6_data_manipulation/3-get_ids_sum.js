export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce((prevStudent, student) => prevStudent.id || prevStudent + student.id, 0);
  }
  return 0;
}
