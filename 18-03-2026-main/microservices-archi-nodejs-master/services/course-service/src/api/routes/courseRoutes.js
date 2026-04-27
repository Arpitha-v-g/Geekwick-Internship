const express = require('express');
const router = express.Router();

let courses = []; // ✅ in-memory storage

// ✅ GET all courses
router.get('/', (req, res) => {
  res.json(courses);
});

// ✅ POST new course
router.post('/', (req, res) => {
  const course = req.body;
  courses.push(course);

  res.status(201).json({
    message: "Course added successfully",
    data: courses
  });
});

module.exports = router;