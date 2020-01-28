'use strict'

const express = require('express')
const router = express.Router()

router.get('/', require('../controllers/homeController').getIssues)

// router.post('/', require('../controllers/homeController').webHook)

module.exports = router
