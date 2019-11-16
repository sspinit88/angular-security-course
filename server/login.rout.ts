import { db } from './database';
import { DbUser } from './db-user';

export function login(req, res) {
  const
    data = req.body;

  const user = db.findUserByEmail(data.email);

  if (!user) {
    res.sendStatus(403);
  } else {
  //   attemptLogin()
  //     .then(() => {
  //
  //     })
  //     .catch(() => {
  //       res.sendStatus(403);
  //     });
  //
  //   res
  //     .status(200)
  //     .json({ user });
  }
}

// async function attemptLogin(data: any, user: DbUser) {
//   const isPasswordValid = await
// }
