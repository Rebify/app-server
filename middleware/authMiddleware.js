import createError from 'http-errors';

import { verifyToken } from '../utils/verifyToken';

export const isAuthenticated = (req, res, next) => {
  const { authorization: token } = req.headers;

  verifyToken(token, err => {
    if (err) {
      throw createError(403);
    }

    next();
  });
};
