const repo = require('../repositories/studentRepository');

const getStudents = () => repo.getAll();

const createStudent = (data) => {
  return repo.create(data);
};

module.exports = { getStudents, createStudent };