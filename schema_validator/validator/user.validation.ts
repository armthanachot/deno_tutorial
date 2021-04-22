import { validate,firstMessages } from "https://deno.land/x/validasaur/mod.ts";

import { 
    USER
} from "../schema/user.schema.ts"

const createUser =  async(user:object)=>{
    try {
        const [passes,errors] = await validate(user,USER)
        const firstErrors = firstMessages(errors);
        return {
            status:passes,
            message:firstErrors
        }
        
    } catch (error) {
        console.log(error.message);
        return error.message
        
    }
}

export {
    createUser
}