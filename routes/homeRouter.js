'use strict'

const express = require('express')
const router = express.Router()

router.get('/', require('../controllers/homeController').getIssues)

module.exports = router
