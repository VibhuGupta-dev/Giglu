import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from "./config/MongoConnect.js"
import Authroutes from "./routes/Authroutes.js"

const clientUri = process.env.CLIENTURI;
if (!clientUri) {
    throw new Error("CLIENTURI must be configured");
}
const CLIENTURI = new URL(clientUri).origin;
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

app.get("/" , (_req, res) => {
  res.send({message : "server is running"})
})

app.use("/user" , Authroutes)

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`)
})
