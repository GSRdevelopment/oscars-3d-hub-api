const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
  modelName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  modelDescription: {
    type: String,
    required: true,
  },
  modelClassification: {
    type: String,
    required: true,
  },
  modelFormats: {
    type: [String],
    required: true,
  },
  modelPrice: {
    type: Number,
    required: true,
  },
  modelImages: {
    type: [String],
    required: true,
  },
});

const Model = mongoose.model('Model', modelSchema);

module.exports = Model;
