/**
 * @file index router for backend api
 * @author SSH
 */

var express = require('express');
var image = require('./image');

const router = express.Router();

router.use('/*', (req, res, next) => {
    res.setHeader("Expires", "-1");
    res.setHeader("Cache-Control", "must-revalidate, private");
    next();
});

router.use('/img', image);

module.exports =  router;