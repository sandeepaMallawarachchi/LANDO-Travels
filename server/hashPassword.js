const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'admin123';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  if (err) {
    console.error(err);
  } else {
    console.log('Hashed password:', hash);
  }
});
