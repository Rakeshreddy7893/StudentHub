const mongoose = require('mongoose')

const wanted = new mongoose.Schema({
    
    userid :{
        type : String,
        required : true
    },
    name :{
        type : String,
        required : true
    },
    clgid :{
        type : String,
        required : true,
    },
    skillsreq :{
        type : String,
        required : true,
    },
    theme :{
        type : String,
        required : true,
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('wanteds',wanted)