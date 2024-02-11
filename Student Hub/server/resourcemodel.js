const mongoose = require('mongoose')

const resource = new mongoose.Schema({
    
    Rname :{
        type : String,
        required : true
    },
    Resourcedescription :{
        type : String,
        required : true,
    },
    weburl :{
        type : String,
        required : true,
    },
    pic :{
        type : String,
        required : true,
    }
})

module.exports = mongoose.model('New resource', resource)