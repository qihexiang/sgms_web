import { useState } from "react"
import { useEffect } from "react"
// import Ajv, { JSONSchemaType } from "ajv"

// const ajv = new Ajv({
//     int32range: false
// })

type ADDItem = {
    "amount": number,
    "name": string,
    "category": Array<string>,
    "tags": Array<string>,
    "place": string,
    "memberId": number,
}

export default function Additem(iteminfo:ADDItem){
    const [additems, setNewItems] = useState<ADDItem[]>([])
    const url="/api/goods/"
    //按要求拼接请求（待完成）
    // const url2post = `${url}/${additems.map(additems=>additems.personID)}/${additems.map(additems=>additems.personID)}`
    useEffect(()=>{
        fetch(url,{
            method:"POST",
            body:JSON.stringify(iteminfo)
        }).then(response =>{
            if(!(response.ok)){
                throw new Error(`Error ${response.status} Network response was not OK`)
            }
        }).catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
          });

    },[])
    
}