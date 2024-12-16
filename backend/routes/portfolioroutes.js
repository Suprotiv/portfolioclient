const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process'); 
const ClientModel = require('../models/ClientModel'); 
const Portfoliomodel = require('../models/Portfoliomodel');
const jwt = require('jsonwebtoken');

const SECRET_KEY =process.env.SECRET_KEY ; ;// Adjust the path to your model

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
        { $match: { orientation: 'Landscape' } },
        { $sample: { size: 2 } },
      ]),
      // Fetch 5 random portrait projects, excluding those with type: "caption"
      Portfoliomodel.aggregate([
        { $match: { orientation: 'Portrait', type: { $ne: 'Caption' } } },
        { $sample: { size: 5 } },
      ])
    ]);

    // Update the orientation of the last portrait project to 'special'
    if (portraitProjects.length > 0) {
      portraitProjects[portraitProjects.length - 1].orientation = 'special';
    }

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
 // Replace with a secure secret key

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Get the token from "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  // Verify the token
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token.' });
    }

    req.user = user; // Attach user information to the request object
    next();
  });
};
// Protect the /addclient route
router.post('/addclient', authenticateToken, upload.single('file'), async (req, res) => {
  try {
    const { name } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Image file is required.' });
    }

    const image = `${req.protocol}://${req.get('host')}/clients/${req.file.originalname}`;

    const newClient = new ClientModel({
      name,
      image,
    });

    await newClient.save();

    res.status(201).json({ message: 'Client added successfully.', client: newClient });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding client.', error });
  }
});

// Protect the /addproject route
router.post('/addproject', authenticateToken, upload.single('file'), async (req, res) => {
  try {
    const { title, category, type, video, orientation } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Image file is required.' });
    }

    const originalImage = `${req.protocol}://${req.get('host')}/clients/${req.file.originalname}`;
    const lowResImageName = req.file.originalname.replace(/\.[^/.]+$/, '_lowres.jpg');
    const lowResImagePath = `${req.file.destination}/${lowResImageName}`;

    exec(
      `ffmpeg -i ${req.file.path} -vf scale=20:-1 ${lowResImagePath}`,
      async (error, stdout, stderr) => {
        if (error) {
          console.error('Error generating low-resolution image:', error);
          return res.status(500).json({ message: 'Error processing image.' });
        }

        const newPortfolio = new Portfoliomodel({
          title,
          category,
          type,
          video,
          orientation,
          image: originalImage,
        });

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




// Delete Client
router.delete('/deleteclient/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    // Find the client by ID
    const client = await ClientModel.findById(id);
    if (!client) {
      return res.status(404).json({ message: 'Client not found.' });
    }

    // Extract the image path
    const imagePath = path.join(__dirname, '/clients', path.basename(client.image.split('/').pop()));

    // Delete the image file
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error('Error deleting image file:', err);
        return res.status(500).json({ message: 'Error deleting client image.' });
      }
    });

    // Delete the client from the database
    await ClientModel.findByIdAndDelete(id);

    res.status(200).json({ message: 'Client deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting client.', error });
  }
});

// Delete Project
router.delete('/deleteproject/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    // Find the project by ID
    const project = await Portfoliomodel.findById(id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found.' });
    }

    // Extract the image path
    const imagePath = path.join(__dirname, '/clients', path.basename(project.image.split('/').pop()));

    // Delete the image file
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error('Error deleting image file:', err);
        return res.status(500).json({ message: 'Error deleting project image.' });
      }
    });

    // Delete the project from the database
    await Portfoliomodel.findByIdAndDelete(id);

    res.status(200).json({ message: 'Project deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting project.', error });
  }
});






module.exports = router;
