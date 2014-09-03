'use strict';

var express = require('express');
var controller = require('./profile.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/movies', auth.isAuthenticated(), controller.showMovies);
router.post('/movies/pin', auth.isAuthenticated(), controller.pinMovie);
router.post('/movies/unpin', auth.isAuthenticated(), controller.unpinMovie);

module.exports = router;
