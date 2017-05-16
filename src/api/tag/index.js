
const express = require('express')
const controller = require('./tag.controller')

const router = express.Router()

router.post('/', controller.addTag)
router.get('/list', controller.getTagList)
router.delete('/:id', controller.delTag)
router.put('/:id', controller.updateTag)

module.exports = router
