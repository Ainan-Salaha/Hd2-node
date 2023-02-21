const express = require("express")
const app= express();

app.get("/",(req,res)=>{
    res.send("This is home page")
    res.end();
})
app.get("/api",(req,res)=>{
    res.send(`<h1>About Express :-Express.js is a back end web application framework for building RESTful APIs with Node.js</h1>`)
    res.end();
})
app.post("/main",(req,res)=>{
    res.send("post worked...!");
    res.end();
})



app.listen(3001,()=>{
    console.log("Application running on  port 3001")
})