import { useState } from "react"
import { useEffect } from "react"
import Ajv, { JSONSchemaType } from "ajv"

const ajv = new Ajv({
    int32range: false
})

type PersonHistory = {
    keyword: string,
    nickname?: string,
    itemID:number,
    role: string,
    status: number,//0=>不可借 1=>可借  2=>无剩余
    num: number,
    borrowTime:Array<string>,
    returnTime:Array<string>,
}

type WhichPerson = {
    PersonID: number, 
}

export default function getHistorybyItemID(personid:WhichPerson):object{
    const url=`127.0.0.1:8000/api/person/${personid.PersonID}/history`
    const [itemHistory, setItems] = useState<PersonHistory[]>([])
    useEffect(() => {
        fetch(url,{
            method:"GET",
        }).then(res => res.json()).then(json => {
            // 验证法则
            type getItemHistory = Array<PersonHistory>
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