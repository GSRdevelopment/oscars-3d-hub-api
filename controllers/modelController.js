const Model = require('./../models/modelModel');

exports.getAllModels = async (req, res) => {
  try {
    const models = await Model.find();

    res.status(200).json({
      status: 'success',
      results: models.length,
      data: {
        models,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getModel = async (req, res) => {
  try {
    const model = await Model.findById(req.params.id);

    if (!model) throw new Error();

    res.status(200).json({
      status: 'success',
      data: {
        model,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createModel = async (req, res) => {
  try {
    const newModel = await Model.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        newModel,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateModel = async (req, res) => {
  try {
    const model = await Model.updateOne({ _id: req.params.id }, req.body);

    if (!model) throw new Error();

    res.status(200).json({
      status: 'success',
      data: {
        model,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteModel = async (req, res) => {
  try {
    const model = await Model.deleteOne({ _id: req.params.id });

    if (!model) throw new Error();

    res.status(204).json({
      status: 'success',
      data: {
        model,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
