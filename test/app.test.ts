import { Application, Router } from "https://deno.land/x/oak@v6.5.0/mod.ts";
import { superoak } from "https://deno.land/x/superoak@4.1.0/mod.ts";
import {findAll,create,update,destroy,mock} from "../controller/user.controller.ts"
import { delay } from 'https://deno.land/x/delay/mod.ts';

const router = new Router({
  prefix:"/user"
})

router.get("/",findAll).get("/mock",mock).post("/",create).put("/:id",update).delete("/:id",destroy)


const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

Deno.test("GET Mock", async () => {
  const request = await superoak(app);
  await request.get("/user/mock").expect(200);
});

Deno.test("Fetch users",async()=>{
  const result = await fetch("http://localhost:3000/user")
  console.log(result);
  
})
// Deno.test("GET All Users", async () => {
//   const request = await superoak(app);
//   await request.get("/user").set("Content-Type","application/json").expect(200);
// });


