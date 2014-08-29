'use strict';

var express = require('express');
var controller = require('./profile.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/movies', auth.isAuthenticated(), controller.showMovies);

module.exports = router;
