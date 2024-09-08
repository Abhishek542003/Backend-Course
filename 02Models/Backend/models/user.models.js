import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({

    username:
    {
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    email:
    {
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:
    {   
        type:String,
        required:true,
        min:[6,"Minimum it should be 6 characters"],
        max:[25,"Maximum its should be 25 characters"]
    }

},{timestamps:true});

export const User = mongoose.model("User",userSchema);