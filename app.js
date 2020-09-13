const express = require('express');

const modelRouter = require('./routes/modelRoutes');
const cors = require('cors');

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

// ROUTES
app.use('/api/v1/models', modelRouter);

module.exports = app;
