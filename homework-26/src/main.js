import express from "express";
import {config} from "dotenv";
config();

import { connectDB } from "./config/db.js";
import router from "./router/books.router.js";


const PORT = process.env.API_PORT;
const app = express()

app.use(express.json())
 await connectDB()
 

 app.use("/", router);


app.listen(PORT, ()=>console.log("server is running on ", PORT))