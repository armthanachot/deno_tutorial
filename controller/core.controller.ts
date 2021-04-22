import { Status } from "https://deno.land/x/oak/mod.ts";
import {GenerateToken,VerifyToken} from "../services/auth.ts"

const genToken = async({ response, request, params }: { response: any; request: any; params: any })=>{
    try {
      const data = await request.body().value
      const token = await GenerateToken(data)
      console.log(token);
      response.status = Status.OK;
      response.body = {
        data: token,
      };
      return;
    } catch (error) {
      console.log(error);
      response.status = Status.InternalServerError
      response.body = {
        message: "INTERNAL SERVER ERROR",
      };
      return;
    }
  }

  const verifyToken = async({ response, request, params }: { response: any; request: any; params: any })=>{
    try {
      const {token} = await request.body().value
      const verified = await VerifyToken(token)
      console.log(verified);
      response.status = Status.OK;
      response.body = {
        data: token,
      };
      return;
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
        genToken,verifyToken
    }