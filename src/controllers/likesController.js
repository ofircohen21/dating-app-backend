const likesModel = require('../models/likesModel')
const matchesModel = require("../models/matchesModel")

const likesController = {
    postLike: (req, res) => {
        // Post a liked match
        const { userId, matchId, name, age } = req.body
        const likeActionId = Math.floor(Math.random(1) * 1000);

        const match = matchesModel.getMatchById(matchId)

        if (!match) {
            return res.status(404).json({ message: `No match was found with id ${matchId}` })
        }


        if (userId && name && age) {
            likesModel.addLike(userId, likeActionId, name, age)
            matchesModel.addUserToMatchEngagedUsers(matchId, userId)
            return res.status(201).json({ 'success': true })
        }

        return res.status(400).json({ message: 'Missing data' })
    },

    getLikesByUserId: (req, res) => {
        const userId = parseInt(req.params.userId)

        if (Number.isNaN(userId)) {
            return res.status(400).json({ message: 'ID is not a number' })
        }

        const filteredLikes = likesModel.getLikesByUserId(userId)

        res.json(filteredLikes)
    }
}

module.exports = likesController