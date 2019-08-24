import jwt from 'jsonwebtoken';
import createError from 'http-errors';

const secret = process.env.SECRET || 'Dev secret';

export const isAuthenticated = (req, res, next) => {
  const { authentication: token } = req.headers;
  const tokenWithoutBearer = token ? token.split(' ')[1] : '';

  jwt.verify(tokenWithoutBearer, secret, err => {
    if (err) {
      throw createError(403);
    }

    next();
  });
};
