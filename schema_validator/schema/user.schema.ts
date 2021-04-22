import { required, isNumber,isString,isIn,match } from "https://deno.land/x/validasaur/mod.ts";

const USER = {
    fname:[required,isString],
    lname:[required,isString],
    email:[required,isString,match(/\S+@\S+\.\S+/)],
    password:[required,isString],
}

export {
    USER
}