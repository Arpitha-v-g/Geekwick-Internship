const collegeRoutes = require('./collegeRoutes');

module.exports = (app) => {
  app.use('/api/colleges', collegeRoutes);
};