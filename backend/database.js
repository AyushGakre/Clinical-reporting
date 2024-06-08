const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Ayush:1US2Ge9pwIXnlzr6@cluster.rd3tdse.mongodb.net/hospital',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
)
const db = mongoose.connection;
db.on("error",(error)=>{
    console.log("Error occured:", error)
})
db.once("open",()=>{
    console.log("Mongodb connected successfully");
})

const hospitalSchema = new mongoose.Schema({
    name :{type: String},
    transcript: {type:String},
    date: {type : Date, default : Date.now}
})
const hospital = mongoose.model('hospital',hospitalSchema)
module.exports = {
    hospital
}