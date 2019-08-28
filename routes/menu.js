import express from 'express';

import User from '../models/User';
import Menu from '../models/Menu';

import { isAuthenticated } from '../middleware/isAuthenticated';
import { decodeToken } from '../utils/jwt';

const router = express.Router();

router.get('/', isAuthenticated, (req, res) => {
  const { authorization: token } = req.headers;
  const { id } = decodeToken(token);

  // @todo: find the menus related to the user id received and return those
  User.findById(id)
    .populate('menus')
    .then(user => {
      res.status(200).json({ user });
    })
    .catch(err => res.status(400).json(err));
});

router.post('/createMenu', isAuthenticated, (req, res, next) => {
  const { authorization: token } = req.headers;
  const { id } = decodeToken(token);

  User.findById(id)
    .then(() => {
      const { name, dishes } = req.body;

      const newMenu = new Menu({ name, dishes, userId: id });

      newMenu
        .save()
        .then(() => res.status(201).json(newMenu))
        .catch(next);
    })
    .catch(err => res.status(400).json(err));
});

export default router;
