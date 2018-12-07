'use strict';
// utility apps
exports.isDigit = function (c) {
  return /\d/.test(c);
};

exports.isUpper = function (c) {
  return /[A-Z]/.test(c);
};
exports.isLower = function (c) {
  return /[a-z]/.test(c);
};

exports.isSpecial = function (c) {
  return /[^A-Za-z0-9_-]/.test(c);

};

exports.isValidId = function (userId, err, res) {
  if (!userId.length) return false;
  return /^\w+$/.test(userId);
};

exports.isValidEmail = function (userEmail, err, res) {
  if (!userEmail.length) return false;
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);

};

exports.isValidPassword = function (userPassword, err, res) {
  if (!userPassword) res.json("WE NEED PASSWORD!!!!!!");
  if (userPassword.length < 8) return false;
  if (userPassword.length > 100) return false;

  let special = false;
  let upperCase = false;
  let lowerCase = false;
  let number = false;


  // is redundant, but useful when doing tests
  function isDigit(c) {
    return /\d/.test(c);
  };

  function isUpper(c) {
    return /[A-Z]/.test(c);
  };

  function isLower(c) {
    return /[a-z]/.test(c);
  };

  function isSpecial(c) {
    return /[^A-Za-z0-9_-]/.test(c);
  };


  for (let i = 0; i < userPassword.length; i++) {
    if (isDigit(userPassword[i]) && !number) number = true;
    if (isUpper(userPassword[i]) && !upperCase) upperCase = true;
    if (isLower(userPassword[i]) && !lowerCase) lowerCase = true;
    if (isSpecial(userPassword[i]) && !special) special = true;

    if (userPassword[i] === userPassword[i + 1] && userPassword[i] === userPassword[i + 2]) return false; // no more than 2 consecutive letters can be the same.
  }

  return special && upperCase && lowerCase && number;
};
