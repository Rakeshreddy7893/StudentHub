const mongoose = require('mongoose')

const review = new mongoose.Schema({
    
    messageSender :{
        type : String,
        required : true
    },
    messageSenderId :{
        type : String,
        required : true
    },
    messageSenderclgId :{
        type : String,
        required : true
    },
    messageReceiver :{
        type : String,
        required : true,
    },
    message :{
        type : String,
        required : true,
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('reviews',review)