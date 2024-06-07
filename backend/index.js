const express = require('express')
const app = express()
const transcript = require('./routes/transcript')
const details = require('./routes/details')
const genrativeai = require('./routes/genai')
const fetchid = require('./routes/Id')
const cors = require('cors')
const { hospital } = require('./database')
const PORT = 3000;
const { Translate } = require("@google-cloud/translate").v2;
require('dotenv').config();

app.use(express.json());
app.use(cors())

app.use(transcript)
app.use(details)
app.use(genrativeai)
app.use(fetchid)
app.post('/translate',async(req,res)=>{
    // Check if the environment variable is set
    const {text} = req.body
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
    const response = await translate.translate(`${text}`, 'kn');
    res.send(response[0]);
} catch (error) {
    console.log(`Error at translateText --> ${error}`);
    return 0;
}
})

app.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`)
})