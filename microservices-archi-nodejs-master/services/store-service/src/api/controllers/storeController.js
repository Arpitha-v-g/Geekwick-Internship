const storeRepository = require('../../domain/repositories/storeRepository');

exports.listStores = async (req, res, next) => {
  try {
    const items = await storeRepository.list();
    res.json(items);
  } catch (error) {
    next(error);
  }
};

exports.createStore = async (req, res, next) => {
  try {
    const item = await storeRepository.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    next(error);
  }
};
