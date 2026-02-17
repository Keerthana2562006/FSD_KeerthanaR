//import express
const express = require("express");
//creating express app /website
const app=express();

//routing  home page HTTP
app.get('/',(req,res)=>{
res.send("Hello keerthana this is ur home page" )
});

//creating a server
app.listen(5000,()=>{
console.log("http://localhost:5000/")
});