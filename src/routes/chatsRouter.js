const express = require('express')
const router = express.Router()
const { getAllChats } = require('../controllers/chatsController')

router.get('/chats/:id', getAllChats)

module.exports = router