const express = require('express');
const cors = require('cors');
const router=express.Router() // Import the cors package
const mongoose = require('mongoose');
const portfolioroutes = require('./routes/portfolioroutes');
const app = express();
app.use(cors());
require('dotenv').config();

const PORT = process.env.PORT ; 

app.use('/api/portfolio', portfolioroutes);


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
    