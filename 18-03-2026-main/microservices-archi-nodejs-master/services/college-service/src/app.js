const express = require('express');
const app = express();

app.use(express.json());

const registerRoutes = require('./api/routes');
const registerDocs = require('./api/routes/docs');

registerRoutes(app);
registerDocs(app);

module.exports = app;