const express = require("express")
const app = express()
const dbconnection= require("./db")



dbconnection();




app.use('/',(req, res)=> {
    res.send("HEllo akash ")
})

app.listen(8000, ()=> {
    console.log("Server Started")
})
