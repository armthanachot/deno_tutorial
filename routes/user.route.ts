import { Router } from "https://deno.land/x/oak/mod.ts";
import {findAll,create,update,destroy,mock} from "../controller/user.controller.ts"
import {verifyToken} from "../middleware/auth.ts"

const router = new Router({
    prefix:"/user"
})

router.get("/",verifyToken,findAll).get("/mock",mock).post("/",create).put("/:id",update).delete("/:id",destroy)

export default router