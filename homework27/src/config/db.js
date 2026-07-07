import {connect} from "mongoose";
import {config} from "dotenv";
config()


export async function connectDB(){
    try{
        await connect(process.env.MONGO_URL)
        console.log("connecting is successfull")
        
    }catch(error){
        console.log("error on connecting database", error)
    }
}