const jwt = require('jsonwebtoken')
const secretKey = 'secretkey'

const authService =  {
    generateToken: (userName) => {
        const token = jwt.sign({ userName }, secretKey, { expiresIn: '48h' }); // Token expires in 1 hour
        return token
    }
}

module.exports = authService