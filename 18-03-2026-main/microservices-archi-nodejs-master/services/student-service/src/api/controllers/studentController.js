const service = require('../../domain/services/studentService');

const getStudents = (req, res) => {
  res.json(service.getStudents());
};

const createStudent = (req, res) => {
  const student = service.createStudent(req.body);
  res.json(student);
};

module.exports = { getStudents, createStudent };