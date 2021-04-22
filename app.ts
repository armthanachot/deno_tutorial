import { Application } from "https://deno.land/x/oak/mod.ts";
import { bgYellow, red, bold,green } from "https://deno.land/std/fmt/colors.ts"
import productRoute from "./routes/product.route.ts"
import userRoute from "./routes/user.route.ts"
import coreRoute from "./routes/core.route.ts"
const env = Deno.env.toObject()
const PORT = env.PORT || 3000
const HOST = env.HOST || '0.0.0.0'

const app = new Application();

app.use(productRoute.routes())
app.use(userRoute.routes())
app.use(coreRoute.routes())

app.addEventListener("listen",({secure,hostname,port})=>{
    const protocol = secure ? "https://" : "http://"
    const url = `${protocol}:${hostname}:${port}`
    console.log(bold("server is starting on: "+green(url)));
    
})
await app.listen(`${HOST}:${PORT}`);