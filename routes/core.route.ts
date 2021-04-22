import { Router } from "https://deno.land/x/oak/mod.ts";
import { genToken,verifyToken} from "../controller/core.controller.ts"
const router = new Router({
    prefix:"/core"
})


router.post("/genToken",genToken).post("/verifyToken",verifyToken)

export default router

