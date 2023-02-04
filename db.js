const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://roombookingsystem:ajay123@cluster0.hnppmlv.mongodb.net/test"

mongoose.set('strictQuery', true); 

mongoose.connect(mongoURL, {useUnifiedTopology: true , useNewUrlParser : true})

var connection = mongoose.connection

connection.on('error',()=> {
    console.log('Mongo DB connection failed')
})

connection.on('connected', ()=> {
    console.log('Mongo DB conenction succesful')
})

module.exports = mongoose 