const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require('express');
const router = express.Router();
require('dotenv').config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

router.post('/generate',async(req,res)=>{
    const {chat} = req.body
    //Generate patient report in key points in short: \n 
    const prompt = `with the reference of the \n${chat}\n give a medical report with all cardiovascular medical terms explained with there layman meaning`
    const result = await model.generateContentStream(prompt);
    const response = result.response;
    // let formattedResponse = response.replace(/\*\*/g, '');
  
    // // Replace all instances of '\n' with a space
    // formattedResponse = formattedResponse.replace(/\n/g, ' ');
    res.send((await response).text())


})
module.exports = router