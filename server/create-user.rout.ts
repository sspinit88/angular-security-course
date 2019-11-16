import { Request, Response } from 'express';
import { db } from './database';

export function createUser(req: Request, res: Response) {
  const
    credentials = req.body;

  const
    user = db.createUser(credentials.email, credentials.password);

  res
    .status(200)
    .json({
      id: user.id,
      email: user.email,
    });
}
