const express = require("express")
const router=express.Router();


router.get("/",(req,res)=>{
    res.send("heyyyy its good")
}) 


module.exports =router;