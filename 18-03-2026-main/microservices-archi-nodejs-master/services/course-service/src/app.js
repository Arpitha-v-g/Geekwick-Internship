const express = require('express');
const app = express();

app.use(express.json());

// ✅ import BOTH
const registerRoutes = require('./api/routes');
const registerDocs = require('./api/routes/docs');

// ✅ CALL them (NOT app.use)
registerRoutes(app);
registerDocs(app);

module.exports = app;