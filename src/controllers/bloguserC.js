const profile = require("../models/bloguser")
const jwt = require("jsonwebtoken")
exports.register=(req,res)=>{

    let reqbody = req.body
    profile.create(reqbody,(err,data)=>{

        if(err){
            res.status(400).json({status:"Failed",data:err})
        }else{
            res.status(200).json({status:"Success",data:data})
        }

    })

}

exports.login=(req,res)=>{

    let reqbody = req.body 

    var username = reqbody.username
    var password = reqbody.password


    profile.findOne({username:username,password:password},(error,data)=>{
        if(error){
            res.status(400).json({status:"Failed",data:error})
        }else if(!data){
            res.status(404).json({status:"Not found",data:null})
        }else{

            let PL = {
                exp: Math.floor(Date.now() / 1000) + (48 * 60 * 60),
                data: data[0]
            }
            var token = jwt.sign(PL,"mahirshadid");

            res.status(200).json({status:"Logged In",token:token,data:data})
        }
    })

}