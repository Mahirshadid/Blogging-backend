var jwt = require("jsonwebtoken")

module.exports=(req,res,next)=>{

    let token = req.headers['token-key']
    jwt.verify(token,"mahirshadid",function (err,decoded) {
        if(err){
            res.status(400).json({status:"Failed",data:err})
        }else{
            let uname = req.headers['username']
            req.headers.username=uname
            next()
        
        }
    })
}