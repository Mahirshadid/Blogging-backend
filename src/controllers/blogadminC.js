const blog = require("../models/blogadmin")
exports.create=(req,res)=>{

    let reqbody = req.body
    let title = req.headers['title']

    let author = reqbody['author']
    let content = reqbody['content']

    let wholebody = {
        title:title,
        author:author,
        content:content,
        date:Date.now()
    }
    blog.create(wholebody,(err,data)=>{

        if(err){
            res.status(400).json({status:"Failed",data:err})
        }else{
            res.status(200).json({status:"Success",data:data})
        }

    })

}

exports.select=(req,res)=>{

    let title = req.headers['title']
    
    blog.find({title:title},(error,data)=>{
        if(error){
            res.status(400).json({status:"Failed",data:error})
        }else{
            res.status(200).json({status:"Success",data:data})
        }
    })

}

exports.update=(req,res)=>{

    let title = req.headers['title']
    let reqbody = req.body

    blog.updateOne({title:title},{$set:reqbody},{upsert:true},(error,data)=>{
        if(error){
            res.status(400).json({status:"Failed",data:error})
        }else{
            res.status(200).json({status:"Success",data:data})
        }
    })

}

exports.delete=(req,res)=>{
    let reqbody = req.body
    let _id = reqbody['_id']

    blog.remove({_id:_id},(error,data)=>{
        if(error){
            res.status(400).json({status:"Failed",data:error})
        }else{
            res.status(200).json({status:"Success",data:data})
        }
    })

}
