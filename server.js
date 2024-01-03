
const express = require('express');
const app = express();
app.set('view engine','ejs');

const userRouter = require('./Routes/user');
app.use('/user',userRouter);

const userRouter1 = require('./Routes/admin');
app.use('/admin',userRouter1);

app.get('/',(req,res)=>{
    // res.send("Welcome All")
    res.render('index.ejs',{name:"ammu"});
});

app.listen('3000',()=>{console.log("Server is running");});