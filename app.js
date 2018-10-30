const express = require('express');
const app = express();

const questionRoutes = require('./api/questions');
const answerRoutes = require('./api/answers');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded( { extended:true }));
app.use(bodyParser.json());

app.use('/question', questionRoutes);
app.use('/answer', answerRoutes);

module.exports = app;
