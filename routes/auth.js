import express from 'express';
import bcrypt from 'bcryptjs';

import User from '../models/User';
import { signToken, decodeToken } from '../utils/jwt';

import { isAuthenticated } from '../middleware/isAuthenticated';

const router = express.Router();

router.post('/signup', (req, res) => {
  try {
    const { email, password } = req.body;

    User.findOne({ email }).then(user => {
      if (user) {
        return res.status(400).json({ error: 'This email address is already registered.' });
      }

      const newUser = new User({
        email,
        password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          throw err;
        }

        bcrypt.hash(newUser.password, salt, (error, hash) => {
          if (error) throw error;
          newUser.password = hash;
          newUser
            .save()
            .then(createdUser => res.status(200).json(createdUser))
            .catch(userErr => res.status(400).json(userErr));
        });
      });
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;

    User.findOne({ email }).then(user => {
      if (!user) {
        return res.status(404).json({ error: 'No account associated with this email was found' });
      }

      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const tokenCallback = (err, token) => {
            if (err) {
              return res.status(500).json({ error: 'Error signing token', raw: err });
            }

            return res.status(200).json({ success: true, token });
          };

          const payload = { id: user._id };
          signToken(payload, tokenCallback);
        } else {
          return res.status(400).json({ error: 'The introduced password is incorrect' });
        }
      });
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get('/verify-token', isAuthenticated, (req, res) => {
  return res.status(200).json({ message: 'The token is valid' });
});

router.get('/decode-token', isAuthenticated, (req, res) => {
  const { authorization: token } = req.headers;
  try {
    const { id } = decodeToken(token);
    console.log(`The user id is: ${id}`);

    return res.status(200).json({ message: 'The token could be decoded' });
  } catch (error) {
    return res.json(401).json({ error: 'The token could not be decoded' });
  }
});

export default router;
