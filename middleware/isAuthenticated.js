import createError from 'http-errors';

import { verifyToken } from '../utils/jwt';

export const isAuthenticated = (req, res, next) => {
  const { authorization: token } = req.headers;

  verifyToken(token, err => {
    if (err) {
      throw createError('Invalid token', 403);
    }

    next();
  });
};
