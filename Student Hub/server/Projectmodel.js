const mongoose = require('mongoose')

const proj = new mongoose.Schema({
    
    profileId :{
        type : String,
        required : true
    },
    project :{
        type : String,
        required : true,
    }
})

module.exports = mongoose.model('project',proj)