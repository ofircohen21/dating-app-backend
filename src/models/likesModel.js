const likes = require('../data/likesData')
const matchesModel = require('../models/matchesModel')

const likesModel = {

    addLike: (userId, likeActionId, name, age) => {
        likes.push({
            userId,
            likeActionId,
            name,
            age
        })

    },

    getLikesByUserId: (userId) => {
        const filteredLikes = likes.filter(like => like.userId === userId)

        return filteredLikes
    }
}

module.exports = likesModel