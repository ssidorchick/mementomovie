'use strict';

var express = require('express');
var controller = require('./movie.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/filters', controller.filters);
router.get('/:permalink', controller.show);

module.exports = router;
