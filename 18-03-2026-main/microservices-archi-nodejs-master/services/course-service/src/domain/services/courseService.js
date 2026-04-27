const repo = require('../repositories/CourseRepository');

const getCourses = () => repo.getAll();

const createCourse = (data) => {
  return repo.create(data);
};

module.exports = { getCourses, createCourse };