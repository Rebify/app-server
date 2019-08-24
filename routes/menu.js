import express from 'express';

import User from '../models/User';

import { isAuthenticated } from '../middleware/authMiddleware';
import { decodeToken } from '../utils/verifyToken';

const router = express.Router();

router.get('/', isAuthenticated, (req, res) => {
  const { authorization: token } = req.headers;
  const { id } = decodeToken(token);

  User.findById(id)
    .then(user => {
      console.log(user);
    })
    .catch(err => res.status(400).json(err));
});

export default router;
