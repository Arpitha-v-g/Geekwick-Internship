const express = require('express');
const router = express.Router();
const controller = require('../controllers/collegeController');

// base already = /api/colleges
router.get('/', controller.getColleges);
router.post('/', controller.createCollege);

module.exports = router;