import { useState } from "react"
import { useEffect } from "react"
// import Ajv, { JSONSchemaType } from "ajv"

// const ajv = new Ajv({
//     int32range: false
// })

type ADDItem = {
    personID: number,
    staff: string,
    position: string,
    keyword: string,
    nickname?:string,
    role:string,//种类
    status: number,//0=>不可借 1=>可借  2=>无剩余
    num: number, //物品数量
}

export default function Additem(object:ADDItem){
    const [additems, setNewItems] = useState<ADDItem[]>([])
    const url="等后端同学给格式"
    //按要求拼接请求（待完成）
    const url2post = `${url}/${additems.map(additems=>additems.personID)}/${additems.map(additems=>additems.personID)}`
    useEffect(()=>{
        fetch(url2post,{
            method:"POST",
        }).then(response =>{
            if(!(response.ok)){
                throw new Error(`Error ${response.status} Network response was not OK`)
            }
        }).catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
          });

    },[])
    
}