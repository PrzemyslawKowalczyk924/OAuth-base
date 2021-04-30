const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if (req.user === undefined) {
    res.redirect('/user/no-permission');
  } else {
    next();
  }
};

router.get('/logged', (req, res) => {
  res.render('logged');
});

router.get('/profile', isLogged, (req, res, next) => {
  res.render('profile');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.render('settings');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

module.exports = router;