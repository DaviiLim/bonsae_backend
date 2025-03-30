const express = require('express');
const morgan = require('morgan');
const importRouter = require('./routes/importRouter.js');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/', importRouter);

module.exports = app;