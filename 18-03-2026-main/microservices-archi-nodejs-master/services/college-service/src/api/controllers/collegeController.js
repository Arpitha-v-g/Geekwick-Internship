const service = require('../../domain/services/collegeService');

const getColleges = (req, res) => {
  res.json(service.getColleges());
};

const createCollege = (req, res) => {
  res.status(201).json(service.createCollege(req.body));
};

module.exports = {
  getColleges,
  createCollege
};