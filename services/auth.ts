import { create, getNumericDate, verify,Header, Payload  } from "https://deno.land/x/djwt/mod.ts"

const key = "my-secret"
const GenerateToken = async ({username}:{username:any})=>{
    const payload:Payload = {
        iss:username,
        exp:getNumericDate(60)
    }
    const header:Header = {
        alg:"HS256",
        typ:"JWT"
    }
    const jwt = await create(header,payload,key)
    return jwt
}

const VerifyToken = async (token:string)=>{
    try {
        const verified = await verify(token,key,"HS256")
        return verified
    } catch (error) {
        return {status:false,msg:error.message}
    }

}

export {
    GenerateToken,
    VerifyToken
}
