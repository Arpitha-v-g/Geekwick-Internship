let colleges = [];

const getAll = () => colleges;

const create = (college) => {
  colleges.push(college);
  return college;
};

module.exports = { getAll, create };