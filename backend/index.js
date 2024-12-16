const express = require('express');
const cors = require('cors');
const path=require('path')
const router=express.Router() // Import the cors package
const mongoose = require('mongoose');
const portfolioroutes = require('./routes/portfolioroutes');
const app = express();
app.use(cors());
require('dotenv').config();

const PORT = process.env.PORT ; 

app.use('/api/portfolio', portfolioroutes);
app.use('/clients', express.static(path.join(__dirname, 'routes/clients')));

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    // Dummy user authentication logic (replace this with your actual logic)
    const user = { id: 1, username: 'testUser' }; // Example user object
  
    // Compare the user's credentials (dummy check here)
    if (username === 'testUser' && password === 'password123') {
      // Generate a JWT token
      const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' }); // Token expires in 1 hour
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid username or password.' });
    }
  });

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
    