import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'jwt_secret';

const validationToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = verify(authorization, secret);
    req.body = decoded;
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  return next();
};

export default validationToken;
