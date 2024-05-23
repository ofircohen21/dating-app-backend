const express = require('express')
const { registerUser, updateUser, getUserById, getAllUsers, deleteUser } = require('../controllers/usersController')

const router = express.Router()

router.post('/users', registerUser)

router.put('/users/:id', updateUser)

router.get('/users/:id', getUserById)

router.get('/users', getAllUsers)

router.delete('/users/:id', deleteUser)

module.exports = router