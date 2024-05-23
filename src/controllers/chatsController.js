const chatsModel = require("../models/chatsModel")

const chatsController = {
    getAllChats: (req, res) => {
        const idParam = parseInt(req.params.id)
        if (Number.isNaN(idParam)) {
            return res.status(400).json({ 'Message': `ID is not a number` })
        }
    
        const filteredChats = chatsModel.getAllChats(idParam)
    
        return res.json(filteredChats)
    }
}

module.exports = chatsController