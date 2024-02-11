const mongoose = require('mongoose')

const teachers = new mongoose.Schema({
    
    teacherName:String,
    teacherDepartment:String,
    teacherRole:String,
    teacherqualification:String,
    teachermob:String,
    teacheremail:String,
    teachersub:String
})

module.exports = mongoose.model('teachers',teachers)