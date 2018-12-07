'use strict'

const assert = require('assert'),
  should = require('chai').should(),
  expect = require('chai').expect,
  v = require('./validators');

describe('Server Side Validation Checks', function () {
  it('should return true if anything is valid...', function () {
    assert.equal(v.isDigit(1), true);
    assert.equal(v.isSpecial('!'), true);
    assert.equal(v.isLower('b'), true);
    assert.equal(v.isUpper('B'), true);
    assert.equal(v.isUpper('z'), false);
    assert.equal(v.isLower('z'), true);
    assert.equal(v.isValidPassword('!badM0j0l3mur!'), true);
    assert.equal(v.isValidPassword('!badM0j0l3mmur!'), true);
    assert.equal(v.isValidPassword('!badM0j0l3mmmur!'), false);
    assert.equal(v.isValidId('amcalhoun84'), true);
    assert.equal(v.isValidId('!techie boy_-'), false);
  });
});

it('should return true if user id is valid, false is invalid', function () {
  var validUser = v.isValidId('ac11calhoun'); // only digits and upper/lower case letters allowed
  expect(validUser).to.be.true;
  validUser.should.equal(true);

  var invalidUser = v.isValidId('a_!01@b'); // has special characters -- bad!
  expect(invalidUser).to.be.false;
  invalidUser.should.equal(false);
});

it('should resolve a valid email', () => {
  var validEmail = v.isValidEmail('andrew.m.calhoun@gmail.com');
  expect(validEmail).to.be.true;
});
