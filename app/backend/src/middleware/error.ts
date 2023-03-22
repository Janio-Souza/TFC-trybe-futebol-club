import { NextFunction, Request, Response } from 'express';

const error = (er: Error, req: Request, res: Response, _next: NextFunction) => {
  console.log(er);
  return res.status(500).json(er);
};

export default error;
