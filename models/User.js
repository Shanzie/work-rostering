const express = require('express');
const User = require('../models/User'); // Import the User model
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send('User already exists');
    }

    user = new User({ name, email, password, role });
    await user.save();

    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
