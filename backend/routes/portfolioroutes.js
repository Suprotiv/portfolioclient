const express = require('express');
const router = express.Router();
const Portfoliomodel = require('../models/Portfoliomodel');
const ClientModel = require('../models/ClientModel');


router.get('/getprojects', async (req,res)=>{
    
    const projects= await Portfoliomodel.find({})

    res.json(projects)

})
router.get('/getclients', async (req,res)=>{
    
    const projects= await ClientModel.find({})

    res.json(projects)

})

module.exports=router;