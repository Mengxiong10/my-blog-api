
const express = require('express')
const controller = require('./admin.controller')

const router = express.Router()

router.post('/login',controller.login)
router.post('/logout',controller.logout)

module.exports = router 

