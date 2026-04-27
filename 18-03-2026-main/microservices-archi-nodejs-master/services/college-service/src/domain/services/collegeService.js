const repo = require('../repositories/collegeRepository');

const getColleges = () => repo.getAll();

const createCollege= (data) => {
  return repo.create(data);
};

module.exports = { getColleges, createCollege };