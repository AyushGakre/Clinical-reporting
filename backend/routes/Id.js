const express = require('express');
const {hospital} = require('../database')
const router = express.Router();

router.get('/:id',async(req,res)=>{
    const patientid = req.params.id;
const find = await hospital.findById({_id: patientid})
res.send(find)

})
module.exports = router