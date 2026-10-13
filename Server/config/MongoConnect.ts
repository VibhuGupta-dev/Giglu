import mongoose from "mongoose"



export default async function connectDB(){
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/giglu`)
        console.log("Database connected")
    }catch(err){
        console.log("Database didnt connected")
    }
}