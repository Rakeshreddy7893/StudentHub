const mongoose = require('mongoose')

const registerlogin = new mongoose.Schema({
    
    username :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    }
})

module.exports = mongoose.model('RegisterLogin',registerlogin)