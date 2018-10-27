var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db');
var Students = require('./resources/Students/StudentsRouter');
var Pairing = require('./resources/Pairing/PairingRouter');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/students',Students);
app.use('/pairing',Pairing);

module.exports = app;
