
const express = require('express')
const app = express()

app.set ("view engine", "ejs")
app.get('/',(req, res)=>{
    res.render("home")
})

app.get('/about',(req, res)=>{
    res.send("About will appear here")
})

app.get('/result',(req, res)=>{
    res.send("About will appear here ${req.query.name}")
})

app.listen(3000, ()=>{
    console.log("Server has started")
})