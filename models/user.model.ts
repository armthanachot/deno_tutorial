import {client} from "../db/connection.ts"
import { table } from "https://raw.githubusercontent.com/yourtion/deno-sql/master/mod.ts";


const findAll = async()=>{
    const result = await client.query(`SELECT * FROM users`)
    return result
}

const create = async(user:object)=>{
    const sql = await table("users").insert(user).build()
    const result = await client.execute(sql)
    return result
}

const update = async(id:string,user:object)=>{
    const sql = await table("users").update(user).where({id}).build()
    const result = await client.execute(sql)
    return result
}

const destroy = async(id:string)=>{
    const sql = await table("users").delete().where({id}).build()
    const result = await client.execute(sql)
    return result
}
export {
    findAll,
    create,
    update,
    destroy
}