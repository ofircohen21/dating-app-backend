const matchesModel = require("../models/matchesModel")

const dislikeController = {
    postDislike: (req, res) => {
        const { matchId, userId } = req.body

        const match = matchesModel.getMatchById(matchId)

        if (!match) {
            return res.status(404).json({ message: `No match was found with id ${matchId}` })
        }

        matchesModel.addUserToMatchEngagedUsers(matchId, userId)

        return res.status(201).json({ success: true })
    }
}

module.exports = dislikeController