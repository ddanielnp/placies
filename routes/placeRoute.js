const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('./places/index')
})

router.post('/', function (req, res) {
  res.send('')
})

module.exports = router
