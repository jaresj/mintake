const { request } = require('express')
const express = require('express')
const router = express.Router()

// @desc    Confirmation Page
// @route   GET /Confirmation.ejs
router.get('/submitIntake', (req, res) => {
    res.render('/confirmation.ejs')
})

module.exports = router;