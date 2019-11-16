import { sessionStore } from './session-store';

export function logout(req, res) {
  const sessionId = req.cookies['SESSIONID'];
  sessionStore.destroySession(sessionId);
  res.clearCookie('SESSIONID');
  res.sendStatus(200);
}
