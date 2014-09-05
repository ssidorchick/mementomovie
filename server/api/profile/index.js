'use strict';

var express = require('express');
var controller = require('./profile.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/movies', auth.isAuthenticated(), controller.showMovies);
router.post('/movies/follow', auth.isAuthenticated(), controller.followMovie);
router.post('/movies/unfollow', auth.isAuthenticated(), controller.unfollowMovie);

module.exports = router;
