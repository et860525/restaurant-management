import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export const DefaultException: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.render('error', { error: err });
};
