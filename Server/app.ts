import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from "./config/MongoConnect.js"

const CLIENTURI = process.env.CLIENTURI
const app=express()
const PORT = 3000;

app.use(cors( {
    origin : CLIENTURI,
    credentials : true,
    methods : ['GET','POST','PUT','DELETE']
}))
connectDB()
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`)
})

