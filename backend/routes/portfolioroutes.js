const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const ClientModel = require('../models/ClientModel'); 
const Portfoliomodel = require('../models/Portfoliomodel');// Adjust the path to your model

const router = express.Router();

const clientsDir = path.join(__dirname, 'clients');

// Ensure the 'clients' folder exists
if (!fs.existsSync(clientsDir)) {
  fs.mkdirSync(clientsDir, { recursive: true });
}

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, clientsDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  }
});

const upload = multer({ storage: storage });


router.get('/getprojects', async (req,res)=>{
    
    const projects= await Portfoliomodel.find({})

    res.json(projects)

})
router.get('/getclients', async (req,res)=>{
    
    const projects= await ClientModel.find({})

    res.json(projects)

})

// POST request to add a new client
router.post('/addclient', upload.single('file'), async (req, res) => {
    try {
      const { name } = req.body; // Extract client name from request body
  
      if (!req.file) {
        return res.status(400).json({ message: 'Image file is required.' });
      }
  
      // Generate the URL for the uploaded image
      const image = `${req.protocol}://${req.get('host')}/clients/${req.file.originalname}`;
  
      // Create a new client entry
      const newClient = new ClientModel({
        name,
        image
      });
  
      // Save the client to the database
      await newClient.save();
  
      res.status(201).json({ message: 'Client added successfully.', client: newClient });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error adding client.', error });
    }
  });

router.post('/addproject', upload.single('file'), async (req, res) => {
    try {
      const { title,category,type ,video , orientation } = req.body; // Extract client name from request body
  
      if (!req.file) {
        return res.status(400).json({ message: 'Image file is required.' });
      }
  
      // Generate the URL for the uploaded image
      const image = `${req.protocol}://${req.get('host')}/clients/${req.file.originalname}`;
  
      // Create a new client entry
      const newClient = new Portfoliomodel({
        title,
        category,
        type ,
        video , 
        orientation,
        image
      });
  
      // Save the client to the database
      await newClient.save();
  
      res.status(201).json({ message: 'Portfolio added successfully.', client: newClient });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error adding portfolio item.', error });
    }
  });

module.exports = router;
