
const express = require('express')
const controller = require('./upload.controller.js')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'tmp')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({storage})

const router = express.Router()

router.post('/', upload.single('file'), controller.upload)

module.exports = router
