import { type } from "os"

export default function ShowItemlist(){
    type itemList = {
        编号:number,
        名称:string,
        分类:string,
        数量:number,
    }

    return(
        <table className="table11_7">
        <tbody>
            <tr>
                <th>编号</th><th>名称</th><th>分类</th><th>数量</th><th>放置位置</th>
            </tr>
            <tr>
                <td>物品一</td><td>SAMPLE</td><td>SAMPLE</td><td>SAMPLE</td><td>SAMPLE</td>
            </tr>
        </tbody>
    </table>
    )
}
