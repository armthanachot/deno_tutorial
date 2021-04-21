import { Status } from "https://deno.land/x/oak/mod.ts";
import { products } from "../services/product.ts";
import { Product } from "../models/product.ts";
const findAll = async (
  { response, request }: { response: any; request: any },
) => {
  response.status = Status.OK;
  response.body = {
    data: products,
  };
  return;
};

const findByID = async (
  { response, request, params }: { response: any; request: any; params: any },
) => {
  try {
    const product: Product | undefined = products.find((product) =>
      product.id == params.id
    );
    response.status = Status.OK;
    if (!product) {
      response.status = Status.NotFound;
      response.body = {
        message: "NOT FOUND",
      };
      return;
    }
    response.status = Status.OK;
    response.body = {
      data: product,
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
const findByRange = async (
  { response, request }: { response: any; request: any },
) => {
  try {
    const min = request.url.searchParams.get("min");
    const max = request.url.searchParams.get("max");
    if(!min || !max){
        response.body = {
            code : 400,
            message:"BAD REQUEST"
        }
        response.status = Status.BadRequest
        return
    }
    const product : Product | any = products.filter((product)=>product.price >= Number(min) && product.price <= Number(max))
    if(!products){
        response.status = Status.NotFound
        response.body = {
            data:product,
            message:"NOT FOUND"
        }
        return
    }
    response.status = Status.OK
    response.body = {
        data: product,
        message:"OK"
    }
    return
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
  { response, request }: { response: any; request: any },
) => {
  try {
    const data = await request.body().value;
    products.push(data);
    response.status = Status.OK;
    response.body = {
      data: products,
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

const update = async({ response, request,params }: { response: any; request: any,params:any },)=>{
    try {
        let product : Product | any = products.filter((product)=>product.id == params.id )[0]
        const data = await request.body().value
        product = data
        response.status = Status.OK;
        response.body = {
          data:product
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
}

const destroy = async({ response, request,params }: { response: any; request: any,params:any },)=>{
    try {
        const id = params.id
        const product_index = products.findIndex((product)=>product.id == id)
        console.log(product_index);
        
        // delete products[product_index]
        const result = products.slice(product_index)
        console.log(result);
        
        response.status = Status.OK;
        response.body = {
            data:result
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
} 
export { create, findAll, findByID,findByRange,update,destroy};
