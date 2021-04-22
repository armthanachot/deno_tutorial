import { Router } from "https://deno.land/x/oak/mod.ts";
import {findAll,create,update,destroy} from "../controller/user.controller.ts"
const router = new Router({
    prefix:"/user"
})

router.get("/",findAll).post("/",create).put("/:id",update).delete("/:id",destroy)

export default router