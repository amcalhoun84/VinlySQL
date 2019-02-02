const passport = require('passport'),
  localStrategy = require('passport-local').Strategy,
  db = require('../models/dbconnection'),
  users = require('../routes/users'),
  JWTStrategy = require('passport-jwt').Strategy,
  ExtractJWT = require('passport-jwt').ExtractJwt,
  JWTSecret = process.env.JWT_ENCRYPTION;
