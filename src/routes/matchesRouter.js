const express = require('express')
const router = express.Router()
const { getFilteredMatches } = require('../controllers/matchesController')

router.get('/matches', getFilteredMatches)

module.exports = router