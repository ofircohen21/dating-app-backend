const matches = require('../data/matchesData')

const matchesModel = {
    addUserToMatchEngagedUsers: (matchId, userId) => {
        const match = matches.find(match => match.id === matchId)

        match.matchEngagedUsers.push(userId)
    },

    getFilteredMatches: (userId, minAge, maxAge, gender, distance) => {
        let filteredMatches = matches.filter((match) => {
            return match.age >= minAge && match.age <= maxAge && match.gender === gender && match.distance <= distance
        })

        const notEngagedByUserMatches = [...filteredMatches]

        for (let i = filteredMatches.length - 1; i >= 0; i--) {
            let matchEngagedUsers = filteredMatches[i].matchEngagedUsers

            if (matchEngagedUsers.indexOf(userId) !== -1) {
                // Removing match that user liked/disliked from matches offered to user
                notEngagedByUserMatches.splice(i, 1)
            }
        }
        return notEngagedByUserMatches
    },

    getMatchById: (matchId) => {
        const match = matches.find(match => match.id === matchId)

        return match
    },

    deleteMatch: (matchId) => {
        let index = matches.findIndex(match => match.id === matchId)

        deletedMatches = matches.splice(index, 1)

        return deletedMatches.length === 1
    }
}

module.exports = matchesModel