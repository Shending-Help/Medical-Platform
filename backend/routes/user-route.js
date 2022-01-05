const express = require("express");

const router = express.Router();



router.get('/', (req,res,next)=>{
    console.log('GET Response in user');
    res.json({message:'User'})
})

module.exports=router;