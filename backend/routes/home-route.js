const express = require("express");

const router = express.Router();



router.get('/', (req,res,next)=>{
    console.log('GET Response in home');
    res.json({message:'Home'})
})

module.exports=router;