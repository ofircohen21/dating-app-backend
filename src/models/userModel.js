let users = require('../data/usersData')

const userModel = {
    createUser: (userData) => {
        const newUser = {
            id: Math.floor(Math.random(1) * 1000),
            ...userData
        }
        users.push(newUser)

        return newUser
    },

    updateUser: (userId, updatedUserData) => {
        let index = users.findIndex(user => user.id === userId)

        if (index !== -1) {
            users[index] = {
                ...users[index],
                name: updatedUserData.name || users[index].name,
                gender: updatedUserData.gender || users[index].gender
            }

            return users[index]
        } else {
            return null
        }
    },

    getUserByUserName: (userName) => {
        let user = users.find(user => user.userName === userName)

        return user ? user : null
    },

    getUserById: (userId) => {
        let user = users.find(user => user.id === userId)

        return user ? user : null
    },

    getUserByLoginDetails: (userName, password) => {
        const user = users.find(user => user.userName === userName && user.password === password)
        return user ? user : null
    },

    
    deleteUser: (userId) => {
        let userIndex = users.findIndex(user => user.id === userId)

        if (userIndex !== -1) {
            let deletedUsers = users.splice(userIndex, 1)
            return deletedUsers.length === 1

        } else {
            return null
        }
    },

    getUsers: () => {
        return users
    }
}

module.exports = userModel