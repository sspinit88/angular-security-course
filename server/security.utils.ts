const
  util = require('util'),
  crypt = require('crypto');

export const randomBytes = util.promisify(crypt.randomBytes);

crypt.randomBytes(32, (err, num) => {
  // генерируем случайное число
  console.log('File: security.utils.ts, Line - 8, num:', num);
});

randomBytes(32)
  .then(
    num => console.log('File: security.utils.ts, Line - 14, num:', num)
  )
  .catch(err => console.log('File: security.utils.ts, Line - 16, err:', err));
