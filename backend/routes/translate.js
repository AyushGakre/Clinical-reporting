const express = require('express');
const router = express.Router();
const { Translate } = require("@google-cloud/translate").v2;
require('dotenv').config();

router.post('/translate',async(req,res)=>{
    // Check if the environment variable is set
    const {text,language} = req.body
if (!process.env.CREDENTIALS) {
    console.error('Error: CREDENTIALS environment variable is not set');
    process.exit(1);
}
// Parse credentials
let CREDENTIALS;
try {
    CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
} catch (error) {
    console.error('Error parsing CREDENTIALS environment variable:', error);
    process.exit(1);
}
// Configuration of the client
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});
try {
    const response = await translate.translate(`${text}`, `${language}`);
    res.send(response[0]);
} catch (error) {
    console.log(`Error at translateText --> ${error}`);
    return 0;
}
})

module.exports = router