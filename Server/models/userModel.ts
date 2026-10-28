import mongoose from "mongoose"

export interface User {
    name: string
    email: string
    password?: string
    googleId?: string
    image?: string
    contact : Number
    isContact : boolean
    isprofile: boolean
    createdAt: Date
    updatedAt?: Date
}

const userSchema = new mongoose.Schema<User>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String
    },
    googleId:{
        type:String,
    },
    image:{
        type:String
    },
    isprofile:{
        type:Boolean,
        default:false,
    },
    contact : {
        type : Number,
        required : false
    },
    isContact : {
        type : Boolean,
        default : false
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date
    }
})

export default mongoose.model<User>("User", userSchema)