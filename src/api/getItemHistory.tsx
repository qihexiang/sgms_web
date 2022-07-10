import { useState } from "react"
import { useEffect } from "react"
import Ajv, { JSONSchemaType } from "ajv"

const ajv = new Ajv({
    int32range: false
})

type ItemHistory = {
    keyword: string,
    nickname?: string,
    itemID:number,
    role: string,
    status: number,//0=>不可借 1=>可借  2=>无剩余
    num: number,
    borrowTime:Array<string>,
    returnTime:Array<string>,
}

type WhichItem = {
    personID: number,
    itemID: number, 
}

export default function getItemHistory(object:WhichItem):object{
    const url="等后端同学给格式"
    const [itemHistory, setItems] = useState<ItemHistory[]>([])
    useEffect(() => {
        fetch(url,{
            method:"GET",
        }).then(res => res.json()).then(json => {
            // 验证法则
            type getItemHistory = Array<ItemHistory>
            const getItemHistorySchema: JSONSchemaType<getItemHistory> = {
                type: "array",
                items:{
                    type:"object",
                    properties: {
                        keyword:{type:"string"},
                        nickname:{type:"string", nullable: true},
                        itemID:{type:"integer"},
                        role:{type:"string"},
                        status:{type:"integer"},
                        num:{type:"integer"},
                        borrowTime:{type:"array", items: { type: "string" }, nullable: true},
                        returnTime:{type:"array", items: { type: "string" }, nullable: true},
                    },
                    required:["keyword","itemID","role","status","num","borrowTime","returnTime"]
                }
            }
            const validator = ajv.compile(getItemHistorySchema)
            if (validator(itemHistory)) return json;
            else throw new Error("Invalid Items Structure!")
        }).then(itemHistory => {
            setItems(itemHistory)
        }).catch(err => console.log(err))
    }, [])

    return(itemHistory)
}