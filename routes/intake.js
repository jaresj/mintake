const { request } = require('express');
const express = require('express');
const router = express.Router();
// const intakeController = require('./controllers/intake');
// const { ensureAuth } = require('./middleware/auth');
const intakeController = require('/app/controllers/intake');
const { ensureAuth } = require('/app/middleware/auth');

// @desc    Intake Page
// @route   GET /intake
router.get('/', ensureAuth, intakeController.getSubmission);

// @desc    Testing route: Retrieve user data for email
// @route   GET /sendEmail

//should probably be removed eventually for only PUT email form
// router.get('/sendEmail', ensureAuth, emailController.getUser);

// @desc    Intake Page
// @route   POST /submitIntake
router.post('/submitIntake', ensureAuth, intakeController.submitIntakeForm);

module.exports = router;
