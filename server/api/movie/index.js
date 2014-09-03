'use strict';

var express = require('express');
var controller = require('./movie.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.post('/pin', auth.isAuthenticated(), controller.pin);
router.post('/unpin', auth.isAuthenticated(), controller.unpin);

module.exports = router;
