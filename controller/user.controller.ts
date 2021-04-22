import { Status } from "https://deno.land/x/oak/mod.ts";
import * as userModel from "../models/user.model.ts";
import { findOne } from "../services/findOne.ts";
const findAll = async (
  { response, request, params }: { response: any; request: any; params: any },
) => {
  try {
    const users = await findOne(await userModel.findAll());
    response.status = Status.OK;
    response.body = {
      data: users,
    };
    return;
  } catch (error) {
    console.log(error);
    response.status = Status.InternalServerError;
    response.body = {
      message: "INTERNAL SERVER ERROR",
    };
    return;
  }
};

const create = async (
  { response, request, params }: { response: any; request: any; params: any },
) => {
  try {
    const user = await request.body().value
    const created = await userModel.create(user)
    console.log(created);
    
    response.status = Status.OK;
    response.body = {
      message: "OK",
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
};

const update = async({ response, request, params }: { response: any; request: any; params: any })=>{
  try {
    const id = params.id
    const user = await request.body().value 
    const updated  = await userModel.update(id,user)
    console.log(updated);
    response.status = Status.OK;
    response.body = {
      message: "OK",
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

const destroy = async({ response, request, params }: { response: any; request: any; params: any })=>{
  try {
    const id = params.id 
    const deleted = await userModel.destroy(id)
    console.log(deleted);
    
    response.status = Status.OK;
    response.body = {
      message: "OK",
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

export { findAll,create,update,destroy };
