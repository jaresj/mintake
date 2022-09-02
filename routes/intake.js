const { request } = require('express')
const express = require('express')
const router = express.Router()

// @desc    Intake Page
// @route   GET /intake
router.get('/', (req, res) => {
    res.render('intake.ejs')
})

module.exports = router;