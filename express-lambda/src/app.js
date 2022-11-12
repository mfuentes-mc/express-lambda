const express = require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send("hello world!!!");
});


const port= 8080;

app.listen(port,()=>{
    console.log(`Server Started at http://localhost:${port}`);
});

module.exports=app;