const matchesModel = require('../models/matchesModel')

const matchesController = {
    getFilteredMatches: (req, res) => {
        //
        let userId = parseInt(req.query.userId)
        let minAge = parseInt(req.query.minAge)
        let maxAge = parseInt(req.query.maxAge)
        let gender = req.query.gender
        let distance = parseInt(req.query.distance)

        if (!minAge || !maxAge || Number.isNaN(minAge) || Number.isNaN(maxAge) || minAge < 0 || maxAge < 0 || 
            maxAge <= minAge || !gender || !distance || Number.isNaN(distance) || distance < 0 || Number.isNaN(userId)) {
            return res.status(400).json({ 'Message': 'Missing data' })
        }

        filteredMatches = matchesModel.getFilteredMatches(userId, minAge, maxAge, gender, distance)

        return res.json(filteredMatches)
    }
}

module.exports = matchesController