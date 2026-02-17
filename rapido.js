const express= require("express");
const app = express();
app.get('/home',(req,res)=>{
res.send("Home" )
});

app.get('/about',(req,res)=>{
res.send("About" )
});


app.get('/Blog',(req,res)=>{
res.send("Blog" )
});

app.get('/ContactUs',(req,res)=>{
res.send("ContactUs" )
});
app.listen(5000,()=>{
console.log("http://localhost:5000/")
});