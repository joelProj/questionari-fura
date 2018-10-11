const express = require('express');
const app = express();

const questionRoutes = require('./api/questions');
const answerRoutes = require('./api/answers');

app.use('/question', questionRoutes);
app.use('/answer', answerRoutes);

module.exports = app;