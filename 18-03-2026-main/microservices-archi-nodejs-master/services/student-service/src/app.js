const express = require('express');
const app = express();

app.use(express.json());

const studentRoutes = require('./api/routes/studentRoutes');

app.use('/api', studentRoutes);

module.exports = app;