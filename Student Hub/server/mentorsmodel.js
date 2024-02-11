const mongoose = require('mongoose')

const mentors = new mongoose.Schema({
    
    mentorname :{
        type : String,
        required : true
    },
    clgId :{
        type : String,
        required : true,
    },
    dept:{
        type : String,
        required : true,
    },
    mobile:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
    },
    domains :{
        type : String,
        required : true,
    },
    expert :{
        type : String,
        required : true,
    }
})

module.exports = mongoose.model('mentors',mentors)