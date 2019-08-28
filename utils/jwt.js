import jwt from 'jsonwebtoken';

// These should be a pair that can be generated through an online RSA key generator
// a recommended size of 512 bits would be really strong.
export const privateSecret = process.env.PRIVATE_SECRET || 'Dev secret';
export const publicSecret = process.env.PUBLIC_SECRET || 'Dev secret';

export const tokenSignInOptions = {
  issuer: process.env.TOKEN_ISSUER || 'RebifyApp',
  audience: process.env.TOKEN_AUDIENCE || `http://localhost:${process.env.PORT || 3000}`,
  expiresIn: process.env.TOKEN_EXPIRATION || '1d',
  algorithm: 'HS256',
};

export const signToken = (payload, callback) => {
  jwt.sign(payload, privateSecret, tokenSignInOptions, callback);
};

export const getTokenWithoutBearer = token =>
  token && token.includes('Bearer') ? token.split(' ')[1] : token;

export const verifyToken = (token, callback) => {
  const tokenWithoutBearer = getTokenWithoutBearer(token);

  jwt.verify(tokenWithoutBearer, publicSecret, tokenSignInOptions, callback);
};

export const decodeToken = token => {
  try {
    const tokenWithoutBearer = getTokenWithoutBearer(token);
    const decoded = jwt.decode(tokenWithoutBearer, { complete: true });
    const { payload } = decoded;
    return payload;
  } catch (error) {
    return error;
  }
};
