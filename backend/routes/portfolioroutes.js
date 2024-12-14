const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process'); 
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

}) // Adjust the path as needed

router.get('/getprojectsBanner', async (req, res) => {
  try {
    const [landscapeProjects, portraitProjects] = await Promise.all([
      // Fetch 2 random landscape projects
      Portfoliomodel.aggregate([
        { $match: { orientation: 'landscape' } },
        { $sample: { size: 2 } }
      ]),
      // Fetch 5 random portrait projects
      Portfoliomodel.aggregate([
        { $match: { orientation: 'portrait' } },
        { $sample: { size: 5 } }
      ])
    ]);

    const projects = {
      landscape: landscapeProjects,
      portrait: portraitProjects,
    };

    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});


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

  // Import child_process for executing shell commands

  router.post('/addproject', upload.single('file'), async (req, res) => {
    try {
      const { title, category, type, video, orientation } = req.body;
  
      if (!req.file) {
        return res.status(400).json({ message: 'Image file is required.' });
      }
  
      // Generate the URL for the uploaded image
      const originalImage = `${req.protocol}://${req.get('host')}/clients/${req.file.originalname}`;
      const lowResImageName = req.file.originalname.replace(/\.[^/.]+$/, '_lowres.jpg'); // Append '_lowres' to file name
      const lowResImagePath = `${req.file.destination}/${lowResImageName}`; // Path for low-res image
  
      // Run ffmpeg to create a low-resolution image
      exec(
        `ffmpeg -i ${req.file.path} -vf scale=20:-1 ${lowResImagePath}`,
        async (error, stdout, stderr) => {
          if (error) {
            console.error('Error generating low-resolution image:', error);
            return res.status(500).json({ message: 'Error processing image.' });
          }
  
          // Create a new portfolio entry
          const newPortfolio = new Portfoliomodel({
            title,
            category,
            type,
            video,
            orientation,
            image: originalImage, // Save the low-resolution image URL
          });
  
          // Save the portfolio entry to the database
          await newPortfolio.save();
  
          res.status(201).json({
            message: 'Portfolio added successfully.',
            portfolio: newPortfolio,
          });
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error adding portfolio item.', error });
    }
  });
  

module.exports = router;
