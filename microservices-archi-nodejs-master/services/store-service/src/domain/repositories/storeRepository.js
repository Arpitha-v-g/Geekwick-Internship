const Store = require('../models/Store');

module.exports = {
  async list() {
    return Store.find().sort({ createdAt: -1 });
  },
  async create(payload) {
    return Store.create(payload);
  },
};
