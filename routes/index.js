var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    name: process.env.NAME || 'No name set',
  })
});

module.exports = router;
