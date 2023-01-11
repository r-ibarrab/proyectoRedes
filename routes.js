const express = require('express')
const path = require("path")

const APIRoutes = require("./api/index")

const router = express.Router()

const publicPath = path.resolve("./public")


router.get("/",(req,res)=>{
    res.sendFile(publicPath+"/html/home.html")
})

router.get("/login",(req,res)=>{
    res.sendFile(publicPath+"/html/login.html")
})

router.get("/dashboard",(req,res)=>{
    res.sendFile(publicPath+"/html/dashboard.html")
})

router.use('/api',APIRoutes)


module.exports = router