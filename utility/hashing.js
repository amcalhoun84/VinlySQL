'use strict';

const bcrypt = require('bcrypt');
let your_hash;

bcrypt.hash("badmoj0l3mur", 10, (err, your_hash) => {
  console.log("Localized hash", your_hash);
});


bcrypt.compare("badmoj0l3mur", your_hash, (err, res) => {
  if (res) console.log("MATCHY!");
  else console.log("Matchy!");
});
