const express = require('express');
const {hospital} = require('../database')
const router = express.Router();
router.post('/text',async(req,res)=>{
    const {transcript} = req.body;
    try{
    if(!transcript){
        return res.status(400).json({
            message: "empty transcript"
        })
    }
    const newtranscript = new hospital({transcript})
    await newtranscript.save()
    res.json(newtranscript)
}
catch(e){
    res.status(500).json({message: "Internal Server error"})
}
})
module.exports = router