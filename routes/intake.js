const { request } = require('express')
const express = require('express')
const router = express.Router()

const emailController = require('../controllers/email.js');

// @desc    Intake Page
// @route   GET /intake
router.get('/', (req, res) => {
    res.render('intake.ejs')
})

// @desc    Send email on form submit
// @route   PUT /sendEmail
router.put('/sendEmail', emailController.sendEmail);

module.exports = router;