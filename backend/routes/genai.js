const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require('express');
const {hospital} = require('../database');
const router = express.Router();

const genAI = new GoogleGenerativeAI("AIzaSyDzSK_VNYgRjKtocL29voSQdOuw44iMNVQ");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

router.post('/generate',async(req,res)=>{
    const {chat} = req.body
    //Generate patient report in key points in short: \n 
    const prompt = `with the reference of the \n${chat}\n give a medical report with all cardiovascular medical terms explained with there layman meaning in html`
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    let formattedResponse = response.replace(/\*\*/g, '');
  
    // Replace all instances of '\n' with a space
    formattedResponse = formattedResponse.replace(/\n/g, ' ');
    res.send(`${response}`)


})
module.exports = router