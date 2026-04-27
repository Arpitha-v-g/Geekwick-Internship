const courseRoutes = require('./courseRoutes');

module.exports = (app) => {
  app.use('/api/courses', courseRoutes);
};