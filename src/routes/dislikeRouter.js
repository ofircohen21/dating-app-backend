const express = require('express')
const router = express.Router()
const { postDislike } = require('../controllers/dislikeController')

router.post('/dislike', postDislike)

module.exports = router