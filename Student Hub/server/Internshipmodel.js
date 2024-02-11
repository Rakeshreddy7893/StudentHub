const mongoose = require('mongoose')

const Internshipmodel = new mongoose.Schema({
    
    compName :{
        type : String,
        required : true
    },
    compWebsite :{
        type : String,
        required : true,
    },
    description :{
        type : String,
        required : true,
    },
    requirements:{
        type : String,
        required : true,
    },
    mobile :{
        type : String,
        required : true,
    },
    email :{
        type : String,
        required : true,
    },
    expDate:String,
    stipend:String,
    applyPage:String,
    role:String,
})

module.exports = mongoose.model('Internship Model',Internshipmodel)