import mongoose from "mongoose";



const bookSchema = mongoose.Schema({
    id:{type:mongoose.Types.ObjectId},
    name:{type:String},
    author:{type:String},
    price:{type:String}
},{timestaps:true})

export default mongoose.model("Book", bookSchema);