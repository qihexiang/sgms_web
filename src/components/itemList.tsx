import { useState } from "react";

export default function ShowItemlist(){
    type itemlist = {
        编号:number,
        名称:string,
        分类:string,
        数量:number,
        放置位置:string,
        }

        //以下数据仅作测试用
    const data:itemlist[] =[
        {编号:1,名称:"椅子",分类:"非消耗品",数量:6,放置位置:"办公室东南角"},
        {编号:2,名称:"打印纸",分类:"消耗品",数量:6,放置位置:"办公室东南角"},
        {编号:3,名称:"黑色签字笔",分类:"消耗品",数量:10,放置位置:"办公室东南角"},
    ]

    const datatoshow:itemlist[]=[

    ]
    const [itemlist, setItemlist] = useState(data);
    return(
        <table className="table11_7">
        <tbody>
            <tr>
                <th>编号</th><th>名称</th><th>分类</th><th>数量</th><th>放置位置</th>
            </tr>
            {/* <tr>
                <td>物品一</td><td>SAMPLE</td><td>SAMPLE</td><td>SAMPLE</td><td>SAMPLE</td>
            </tr> */}
            {itemlist.map((itemlist,index)=>{
                return(
                    <tr key={index}>
                        <td key={itemlist.编号}>{itemlist.编号}</td>
                        <td key={itemlist.名称}>{itemlist.名称}</td>
                        <td key={itemlist.分类}>{itemlist.分类}</td>
                        <td key={itemlist.数量}>{itemlist.数量}</td>
                        <td key={itemlist.放置位置}>{itemlist.放置位置}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    )
}
