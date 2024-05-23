const jwt = require('jsonwebtoken')
const secretKey = 'secretkey'

const authMiddleware = (req, res, next) => {
    if (req.path === '/login' || (req.path === '/users' && req.method === 'POST')) {
        return next()
    }

    const token = req.headers.authorization
    jwt.verify(token, secretKey, (err) => {
        if (err) {
            return res.status(400).json({ 'Message': 'Unauthorized' })
        } else {
            next()
        }
    })
}

module.exports = authMiddleware
