const express = require('express');
const router = express.Router();
// const authController = require('../controllers/auth');
// const confirmationController = require('./controllers/confirmation');
// const emailController = require('./controllers/email')
// const { ensureAuth } = require('./middleware/auth');
const confirmationController = require('/app/controllers/confirmation');
const emailController = require('/app/controllers/email')
const { ensureAuth } = require('/app/middleware/auth');

router.get('/', ensureAuth, confirmationController.getConfirmation)
router.post('/sendEmail', ensureAuth, emailController.sendEmail)

module.exports = router;