var express = require('express');
var app = express();
var cors = require('cors');
var db = require('./db');

app.use(cors());
var AuthController = require('./auth/AuthController');
app.use('/api', AuthController);

module.exports = app;