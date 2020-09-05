const express = require('express');

const modelRouter = require('./routes/modelRoutes');

const app = express();

// MIDDLEWARES
app.use(express.json());

// ROUTES
app.use('/api/v1/models', modelRouter);

module.exports = app;
