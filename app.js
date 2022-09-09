const express=require('express')
const app=express()
var cors=require('cors')
app.use(express.json)
app.use(cors())
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.listen(5001,function(req,res){
    console.log("Server running")
})

