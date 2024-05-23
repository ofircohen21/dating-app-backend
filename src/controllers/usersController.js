const userModel = require('../models/userModel')

const userController = {
    registerUser: (req, res) => {
        const { firstName, lastName, userName, password, gender, birthDate } = req.body
        const id = Math.floor(Math.random(1) * 1000);

        if (firstName && lastName && userName && password && gender && birthDate) {
            const user = userModel.getUserByUserName(userName)

            if (user) {
                return res.status(409).json({ 'message': `User name '${userName}' is already taken` })
            }

            const newUser = {
                id,
                name: `${firstName} ${lastName}`,
                userName,
                password,
                gender,
                birthDate
            }

            userModel.createUser(newUser)
            return res.status(201).json({ 'success': true, id })
        }

        return res.status(400).json({ message: 'Missing data' })
    },

    updateUser: (req, res) => {
        const { name, gender } = req.body

        const idParam = parseInt(req.params.id)
        if (Number.isNaN(idParam)) {
            return res.status(400).json({ 'Message': `ID is not a number` })
        }
        const updatedUserData = {
            name,
            gender
        }
        let updatedUser = userModel.updateUser(idParam, updatedUserData)
        if (updatedUser) {
            return res.status(200).json({ 'success': true })
        }

        return res.status(404).json({ 'Message': 'No such user' })
    },

    getAllUsers: (_, res) => {
        res.json(userModel.getUsers())
    },

    getUserById: (req, res) => {
        const idParam = parseInt(req.params.id)
        if (Number.isNaN(idParam)) {
            return res.status(400).json({ 'Message': `ID is not a number` })
        }

        const user = userModel.getUserById(idParam)

        if (!user) {
            return res.status(404).json({ 'Message': `No user was found with id ${idParam}` })
        }

        return res.json(user)
    },

    deleteUser: (req, res) => {
        const idParam = parseInt(req.params.id)
        if (Number.isNaN(idParam)) {
            return res.status(400).json({ 'Message': `ID is not a number` })
        }

        const user = userModel.getUserById(idParam)

        if (!user) {
            return res.status(404).json({ 'Message': `No user was found with id ${idParam}` })
        }
        const result = userModel.deleteUser(idParam)
        if (result) {
            return res.json({ 'Success': true })
        }

        return res.status(400).json({ 'Message': `Failed to delete user with id ${idParam}` })
    }
}

module.exports = userController