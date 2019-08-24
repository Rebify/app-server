import jwt from 'jsonwebtoken';

export const secret = process.env.SECRET || 'Dev secret';

export const getTokenWithoutBearer = token => (token ? token.split(' ')[1] : '');

export const verifyToken = (token, callback) => {
  const tokenWithoutBearer = getTokenWithoutBearer(token);

  jwt.verify(tokenWithoutBearer, secret, callback);
};

export const decodeToken = token => {
  const tokenWithoutBearer = getTokenWithoutBearer(token);
  const decoded = jwt.decode(tokenWithoutBearer, { complete: true });

  try {
    const { payload } = decoded;
    return payload;
  } catch (error) {
    return error;
  }
};
