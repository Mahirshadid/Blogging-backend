const express = require('express')
const router = express.Router()
const buserC = require('../controllers/bloguserC')
const badminC = require('../controllers/blogadminC')
const auth = require('../middlewares/auth')
router.post("/register",buserC.register)
router.post("/login",buserC.login)
router.post("/create",auth,badminC.create)
router.get("/select",auth,badminC.select)
router.post("/update",auth,badminC.update)
router.post("/delete",auth,badminC.delete)

module.exports=router