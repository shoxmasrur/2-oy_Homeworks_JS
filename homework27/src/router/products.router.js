import {Router} from "express";
import Product from "../schema/products.schema.js"
import { createData, updateData, deleteData,getData, getOneData} from "../controller/products.controller.js";

const router =  Router()


router
    .post("/", createData )
    .patch("/:id", updateData )
    .delete("/:id", deleteData )
    .get("/", getData)
    .get("/:id", getOneData)
export default router