require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const connectDB = require('./config/db');
const registerRoutes = require('./routes/register');

// Connect to MongoDB
const connectDB = require('./db');
connectDB();

const app = express();
connectDB();
app.use(express.json());
app.use('/api', registerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Body Parser Middleware
app.use(express.json());

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
require('./routes/users')(app);
require('./routes/shifts')(app);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});