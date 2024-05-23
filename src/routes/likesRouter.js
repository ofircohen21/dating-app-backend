const express = require('express')
const router = express.Router()
const { postLike, getLikesByUserId } = require('../controllers/likesController')

router.post('/likes', postLike)
router.get('/likes/:userId', getLikesByUserId)

module.exports = router