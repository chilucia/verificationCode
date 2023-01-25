const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path: './config/config.env'})

const Db = process.env.DATABASE

mongoose.connect(Db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("MongooseDB Conneted ");
})


const app = require('./App')
app.listen(process.env.PORT || 5000, ()=>{
    console.log('Conneted')
})