const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.status(200).json({
    name: process.env.NAME || 'No name set',
  });
});

module.exports = router;
