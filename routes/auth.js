const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const router = express.Router();

const secret = process.env.SECRET || 'Development secret';

router.post('/signup', (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      const error = 'Email Address Exists in Database.';
      return res.status(400).json(error);
    }

    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(newUser.password, salt, (error, hash) => {
        if (error) throw error;
        newUser.password = hash;
        newUser
          .save()
          .then(createdUser => res.json(createdUser))
          .catch(userErr => res.status(400).json(userErr));
      });
    });
  });
});

router.post('/login', (req, res) => {
  const { email } = req.body;
  const { password } = req.body;
  const errors = {};

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = 'No Account Found';
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user._id,
          email: user.email,
        };

        jwt.sign(payload, secret, { expiresIn: 36000 }, (err, token) => {
          if (err) res.status(500).json({ error: 'Error signing token', raw: err });

          res.json({
            success: true,
            token: `Bearer ${token}`,
          });
        });
      } else {
        errors.password = 'Password is incorrect';
        res.status(400).json(errors);
      }
    });
  });
});

module.exports = router;
