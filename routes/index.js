// File name: midterm
// Author's name: Haoren Qu
// student ID: 301180297
// Web App name: booklist

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
