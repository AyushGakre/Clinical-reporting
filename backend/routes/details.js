const express = require('express');
const {hospital} = require('../database');
const router = express.Router();

router.get('/', async(req,res)=>{
    const result = await hospital.find();
    res.json(result)
})

module.exports = router