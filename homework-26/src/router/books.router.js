import {Router} from "express";
import Data from "../controller/books.controller.js"


const router = Router()
const data = new Data()


router.post("/", data.addData)
      .get("/", data.getData)
      .patch("/:id", data.updateData)
      .delete("/:id", data.deleteData);




export default router