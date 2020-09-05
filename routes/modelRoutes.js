const express = require('express');
const modelController = require('./../controllers/modelController');

const router = express.Router();

router
  .route('/')
  .get(modelController.getAllModels)
  .post(modelController.createModel);

router
  .route('/:id')
  .get(modelController.getModel)
  .post(modelController.createModel)
  .patch(modelController.updateModel)
  .delete(modelController.deleteModel);

module.exports = router;
