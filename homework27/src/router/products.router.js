import {Router} from "express";
import Product from "../schema/products.schema.js"
import { createData, updateData, deleteData,getData} from "../controller/products.controller.js";

const router =  Router()


router
    .post("/", createData )
    .patch("/:id", updateData )
    .delete("/:id", deleteData )
    .get("/", getData)
export default router