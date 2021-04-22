import { Status } from "https://deno.land/x/oak/mod.ts";
import {VerifyToken} from "../services/auth.ts"

const verifyToken = async ({request,response}:{request:any,response:any},next:any)=>{
    try {
        const bearerToken = request.headers.get('Authorization') 
        if(!bearerToken){
            response.status = Status.BadRequest
            response.body = {
              message: "INVALID TOKEN",
            };
            return;
        }
        const bearer = bearerToken.split(" ")
        const {status,msg} = await VerifyToken(bearer[1])
        
        if(!status){
            response.status = Status.Unauthorized
            response.body = {
              message: msg,
            };
            return;
        }
        return next()
        
    } catch (error) {
        console.log(error);
        response.status = Status.InternalServerError
        response.body = {
          message: "INTERNAL SERVER ERROR",
        };
        return;
    }
}

export {
    verifyToken
}