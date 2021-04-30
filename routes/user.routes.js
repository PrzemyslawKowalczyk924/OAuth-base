const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  res.render('logged');
});

router.get('/profile', (req, res) => {
  req.user ? res.render('profile') : res.redirect('noPermission');
});

router.get('/profile/settings', (req, res) => {
  req.user ? res.render('settings') : res.redirect('noPermission');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});


module.exports = router;