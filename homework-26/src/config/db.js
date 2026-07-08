import mongoose from "mongoose";
import {config} from "dotenv";
config()


export async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connecting is successfull");
    }catch(err){
        console.log("error  is on connecting", error)
    }
    }