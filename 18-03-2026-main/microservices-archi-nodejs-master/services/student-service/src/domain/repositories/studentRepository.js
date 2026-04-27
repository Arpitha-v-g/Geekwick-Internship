let students = [];

const getAll = () => students;

const create = (student) => {
  students.push(student);
  return student;
};

module.exports = { getAll, create };