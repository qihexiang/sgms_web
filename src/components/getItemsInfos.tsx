import { useState } from "react"
import { useEffect } from "react"
import Ajv, { JSONSchemaType } from "ajv"

const ajv = new Ajv({
    int32range: false
})

type Items = {
    keyword: string,
    nickname?: string,
    role: string,
    status: number,
    num: number,
}

export default function getItemsInfos():object{
    const url="等后端同学给格式"
    const [items, setItems] = useState<Items[]>([])
    useEffect(() => {
        fetch(url,{
            method:"POST",
        }).then(res => res.json()).then(json => {
            // 验证法则
            type getItemsInfosArray = Array<Items>
            const schema: JSONSchemaType<getItemsInfosArray> = {
                type: "array",
                items:{
                    type:"object",
                    properties: {
                        keyword:{type:"string"},
                        nickname:{type:"string", nullable: true},
                        role:{type:"string"},
                        status:{type:"integer"},
                        num:{type:"integer"}
                    },
                    required:["keyword","role","status"]
                }
            }
            const validator = ajv.compile(schema)
            if (validator(items)) return items;
            else throw new Error("Invalid Items Structure!")
        }).then(items => {
            setItems(items)
        }).catch(err => console.log(err))
    }, [])

    return(items)
}