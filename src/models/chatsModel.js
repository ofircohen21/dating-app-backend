const chats = require('../data/chatsData')

const chatsModel = {
    getAllChats: (userId) => {   
        let filteredChats = chats.filter(chat => chat.userId === userId)

        return filteredChats
    }
}

module.exports = chatsModel