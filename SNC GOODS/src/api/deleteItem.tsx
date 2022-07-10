import { useState } from "react"
import { useEffect } from "react"
// import Ajv, { JSONSchemaType } from "ajv"

// const ajv = new Ajv({
//     int32range: false
// })

type DELETEItem = {
    personID: number,
    itemID: number, 
}

export default function Deleteitem(object:DELETEItem){
    const [deleteitems, deleteOldItems] = useState<DELETEItem[]>([])
    const url="等后端同学给格式"
    const url2post = `${url}/${deleteitems.map(deleteitems=>deleteitems.personID)}/${deleteitems.map(deleteitems=>deleteitems.itemID)}`
    useEffect(()=>{
        fetch(url2post,{
            method:"DELETE",
        }).then(response =>{
            if(!(response.ok)){
                throw new Error(`Error ${response.status} Network response was not OK`)
            }
        }).catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
          });
    },[])
    
}