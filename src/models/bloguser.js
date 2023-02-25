const mongoose = require('mongoose')

const data = mongoose.Schema({

    username:{type:String,unique:true},
    password:{type:String}

},{versionKey:false})

const profile = mongoose.model('blog-user',data)

module.exports=profile