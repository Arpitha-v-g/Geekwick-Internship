let courses = [];

const getAll = () => courses;

const create = (course) => {
  courses.push(course);
  return course;
};

module.exports = { getAll, create };