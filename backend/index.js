const express=require("express")
const { connection }=require("./config/db")


const cors = require("cors")
require("dotenv").config()

const app=express();
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Lifestyle store homepage")
})

app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("Connected to DB");
        console.log("Server port :",process.env.port);
    } catch (error) {
        console.log("Connection to DB Failed")
    }
})