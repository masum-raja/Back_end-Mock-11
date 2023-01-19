const express =require("express")
require("dotenv").config()
const cors = require('cors')


const {connection}=require("./Config/db")
const {SignUp}=require("./Routes/signUp.route")
const {logIn}=require("./Routes/login.route")


const app=express();
app.use(express.json())
app.use(cors({
    origin:"*"
}))


app.get("/",(req,res)=>{
    res.send("Welcome to home")
})

app.use("/signup",SignUp)
app.use("/login",logIn)




app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log({"mssg":"Connected successfully to DB"})
    }
    catch(err){
        console.log(err)
        console.log(({"mssg":"Connection fail to DB"}))
    }

    console.log(`listening on port ${process.env.port}`)
})