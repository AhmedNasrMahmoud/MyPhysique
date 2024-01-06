require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const User = require('./user'); // Adjust path as needed
const { body, validationResult } = require('express-validator');
const mongoose = require('mongoose');

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

let server;
if (process.env.NODE_ENV !== 'test') {
    server = app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

app.post('/register', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword
    });

    await user.save();
    res.status(201).send("User registered successfully");
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.post('/login', async (req, res) => {
  try {
      // Find the user by username or email
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
          return res.status(400).send('Invalid credentials');
      }

      // Compare the provided password with the stored hash
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
          return res.status(400).send('Invalid credentials');
      }

      // TODO: Generate and return a token or set a session cookie here

      res.send('Login successful');
  } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
  }
});

// Export the app for testing purposes
module.exports = { app, server };
