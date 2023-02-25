const express = require('express')
const route = require('./src/routes/api')
const app = new express()
const bp = require('body-parser')

const cors = require('cors')

const mongoose = require('mongoose')

app.use(cors())

app.use(bp.json())

let uri = "mongodb://localhost:27017/blog"
let opt = {user:'',pass:'',autoIndex:true}
mongoose.connect(uri,opt,(err)=>{
console.log("Connected")
console.log(err)
})

app.use("/api/v",route)

app.use("*",(req,res)=>{
res.status(404).json({status:"Failed",data:"Not found"})
})

module.exports=app