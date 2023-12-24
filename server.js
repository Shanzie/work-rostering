require('dotenv').config();
const express = require('express');
const cors = require('cors'); 
const passport = require('passport');
const connectDB = require('./config/db');
const registerRoutes = require('./routes/register');

// Connect to MongoDB
connectDB();

const app = express();

// CORS configuration
app.use(cors());

const corsOptions = {
  origin: 'https://workplacerostering.netlify.app', // Your Netlify URL
  optionsSuccessStatus: 200 // For legacy browser support
};
app.use(cors(corsOptions)); // Use CORS with options

// Body Parser Middleware
app.use(express.json());

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api', registerRoutes);
require('./routes/users')(app);
require('./routes/shifts')(app);
require('./routes/leave')(app);
require('./routes/register')(app);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
