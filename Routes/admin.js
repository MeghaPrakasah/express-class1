
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{res.send("Admin page")});
router.get('/home',(req,res)=>{res.send("admin home page")});
router.get('/about',(req,res)=>{res.send("admin About us page")});
router.get('/contact',(req,res)=>{res.send("admin Contact us page")});


module.exports=router;
    