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
    required: false,
  },
  modelFormats: {
    type: [String],
    required: false,
  },
  modelPrice: {
    type: Number,
    required: true,
  },
  modelImages: {
    type: [String],
    required: false,
  },
  modelPreview: {
    type: String,
    required: false,
  },
});

const Model = mongoose.model('Model', modelSchema);

module.exports = Model;
