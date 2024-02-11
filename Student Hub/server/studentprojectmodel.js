const mongoose = require('mongoose')

const studentproject = new mongoose.Schema({
    
    name :{
        type : String,
        required : true
    },
    clgid :{
        type : String,
        required : true,
    },
    category:{
        type : String,
        required : true,
    },
    projecttitle :{
        type : String,
        required : true,
    },
    projectdescription:{
        type : String,
        required : true,
    },
    github :{
        type : String,
        required : true,
    },
    video :{
        type : String,
        required : true,
    },
    website :{
        type : String,
        required : true,
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('Student Projects',studentproject)