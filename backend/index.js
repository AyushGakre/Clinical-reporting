const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Ayush:1US2Ge9pwIXnlzr6@cluster.rd3tdse.mongodb.net/hospital')
const cors = require('cors')
const hospitalSchema = new mongoose.Schema({
    transcript: {type:String},
    date: {type : Date, default : Date.now}
})
const hospital = mongoose.model('hospital',hospitalSchema)
app.use(express.json());
app.use(cors())
app.get('/', async(req,res)=>{
    const result = await hospital.find();
    res.json(result)
})
app.post('/text',async(req,res)=>{
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
app.listen(3000);