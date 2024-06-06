const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require('express');
const {hospital} = require('../database');
const router = express.Router();

const genAI = new GoogleGenerativeAI("AIzaSyDzSK_VNYgRjKtocL29voSQdOuw44iMNVQ");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

router.post('/generate',async(req,res)=>{
    const {chat} = req.body
    //Generate patient report in key points in short: \n 
    const prompt = `Generate patient medical report in key points in short: \n ${chat}`
    const result = await model.generateContent(prompt);
    // const response = await result.response;
    // return response.text();
    res.send(result.response.text())

})
module.exports = router