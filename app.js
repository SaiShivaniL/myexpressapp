const express=require('express')
var app=express()
var cors=require('cors')
const port=process.env.PORT || 3001
app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.get("/health",(req,res)=>{
    res.send("status ok..")
})
app.listen(port,function(req,res){
    console.log("Server running")
})

