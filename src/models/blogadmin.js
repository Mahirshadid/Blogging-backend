const mongoose = require('mongoose')

const data = mongoose.Schema({

    title:{type:String},
    author:{type:String},
    content:{type:String},
    date:{type:Date,default:Date.now()}

},{versionKey:false})

const badmin = mongoose.model('blog-admin',data)

module.exports=badmin