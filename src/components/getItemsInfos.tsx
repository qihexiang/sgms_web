import { useState } from "react"
import { useEffect } from "react"
import Ajv, { JSONSchemaType } from "ajv"

const ajv = new Ajv({
    int32range: false
})

type Items = {
    ItemID:number,
    keyword: string,
    nickname?: string,
    role: string,
    status: number,//0=>不可借 1=>可借  2=>无剩余
    num: number,
}

export default function getItemsInfos():Items{
    const url="等后端同学给格式"
    const [items, setItems] = useState<Items[]>([])
    useEffect(() => {
        fetch(url,{
            method:"GET",
        }).then(res => res.json()).then(json => {
            // 验证法则
            type getItemsInfosArray = Array<Items>
            const getItemsInfoSchema: JSONSchemaType<getItemsInfosArray> = {
                type: "array",
                items:{
                    type:"object",
                    properties: {
                        ItemID:{type:"integer"},
                        keyword:{type:"string"},
                        nickname:{type:"string", nullable: true},
                        role:{type:"string"},
                        status:{type:"integer"},
                        num:{type:"integer"}
                    },
                    required:["keyword","role","status","num"]
                }
            }
            const validator = ajv.compile(getItemsInfoSchema)
            if (validator(items)) return json;
            else throw new Error("Invalid Items Structure!")
        }).then(items => {
            setItems(items)
        }).catch(err => console.log(err))
    }, [])

    return(items)
}