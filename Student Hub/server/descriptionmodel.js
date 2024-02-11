const mongoose = require('mongoose')

const descript = new mongoose.Schema({
    
    profileId :{
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true,
    }
})

module.exports = mongoose.model('description',descript)