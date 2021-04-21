import { Router } from "https://deno.land/x/oak/mod.ts";
import {findAll,findByID,findByRange,create,update,destroy} from "../controller/product.controller.ts"
const router = new Router({
    prefix:"/product"
})

router.get("/",findAll).post("/",create).get("/range",findByRange).get("/:id",findByID).put("/:id",update).delete("/:id",destroy)

export default router