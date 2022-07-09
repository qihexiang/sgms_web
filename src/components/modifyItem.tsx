import { useState } from "react"
import { useEffect } from "react"
// import Ajv, { JSONSchemaType } from "ajv"

// const ajv = new Ajv({
//     int32range: false
// })

type MODIFYItem = {
    personID: number,
    itemID: number, 
    //感觉传入的参数不注意完成这一功能，需完善
}

export default function Deleteitem(object:MODIFYItem){
    const [modifyitems, modifyOldItems] = useState<MODIFYItem[]>([])
    const url="等后端同学给格式"
    const url2post = `${url}/${modifyitems.map(modifyitems=>modifyitems.personID)}/${modifyitems.map(modifyitems=>modifyitems.itemID)}`
    useEffect(()=>{
        fetch(url2post,{
            method:"PUT",
        }).then(response =>{
            if(!(response.ok)){
                throw new Error(`Error ${response.status} Network response was not OK`)
            }
        }).catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
          });
    },[])
    
}