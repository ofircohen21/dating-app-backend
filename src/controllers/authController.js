// controllers/authController.js
const userModel = require('../models/userModel');
const authService = require('../services/authService');

const authController = {
  login: (req, res) => {
    const { userName, password } = req.body;
    const user = userModel.getUserByLoginDetails(userName, password);

    if (user) {
      const token = authService.generateToken(userName);
      return res.json({ userId: user.id, token });
    }

    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  },
};

module.exports = authController;
