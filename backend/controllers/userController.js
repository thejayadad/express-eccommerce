
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

exports.register = (req, res) => {
  const { email, username, password } = req.body;

  User.findOne({ username }, (err, existingUser) => {
    if (err) {
      return res.status(500).json({ message: 'Error checking username availability' });
    }
    if (existingUser) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({ message: 'Error hashing password' });
      }

      const newUser = new User({ email, username, password: hash });

      newUser.save((err) => {
        if (err) {
          return res.status(500).json({ message: 'Error saving user' });
        }
        res.status(201).json({ message: 'User registered successfully' });
      });
    });
  });
};

exports.login = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: 'Authentication failed' });

    const token = jwt.sign({ sub: user._id }, 'your-secret-key', {
      expiresIn: '1h',
    });

    return res.json({ message: 'Authentication successful', token });
  })(req, res, next);
};
