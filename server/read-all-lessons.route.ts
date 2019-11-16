import { db } from './database';
import { sessionStore } from './session-store';


export function readAllLessons(req, res) {

  // возвращаем данные, только аутентифицированных пользвателей
  const sessionId = req.cookies['SESSIONID'];

  const isSessionValid = sessionStore.isSessionValid(sessionId);

  if (!isSessionValid) {
    res.sendStatus(403);
  } else {
    res
      .status(200)
      .json({
        lessons: db.readAllLessons(),
      });
  }
}
