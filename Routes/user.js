
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{res.send("hello world")});
router.get('/home',(req,res)=>{res.send("home page")});
router.get('/about',(req,res)=>{res.send("About us page")});
router.get('/contact',(req,res)=>{res.send("Contact us page")});


module.exports=router;
    