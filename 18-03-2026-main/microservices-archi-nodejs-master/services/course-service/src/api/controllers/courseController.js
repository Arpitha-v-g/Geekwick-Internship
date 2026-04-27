const service = require('../../domain/services/courseService');

const getCourses = (req, res) => {
  res.json(service.getCourses());
};

const createCourse = (req, res) => {
  const course = service.createCourse(req.body);
  res.json(course);
};

module.exports = { getCourses, createCourse };