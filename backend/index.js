const express = require('express')
const app = express()
const transcript = require('./routes/transcript')
const details = require('./routes/details')
const cors = require('cors')
const PORT = 3000;
app.use(express.json());
app.use(cors())
app.use(transcript)
app.use(details)
app.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`)
})