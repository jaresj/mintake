const express = require('express');
const router = express.Router();
// const authController = require('./controllers/auth');
// const homeController = require('./controllers/home');
// const { ensureAuth, ensureGuest } = require('./middleware/auth');
const authController = require('/app/controllers/auth');
const homeController = require('/app/controllers/home');
const { ensureAuth, ensureGuest } = require('/app/middleware/auth');

router.get('/', homeController.getIndex);
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/logout', authController.logout);
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);
router.get('/submitUserForm', authController.getSignup);
router.post('/submitUserForm', authController.postSignup);

module.exports = router;
