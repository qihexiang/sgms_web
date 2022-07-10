import { type } from "os"

export default function ShowItemlist(){
    type itemList = {
                归还人ID:number,
                归还人姓名:string,
                登记人ID:number,
                名称:string,
                分类:string,
                借出数量:number,
                归还数量:number,
                归还时间:number,
    }

    return(
        <table className="table11_7">
        <tbody>
            <tr>
                <th>归还人ID</th><th>归还人姓名</th><th>登记人ID</th><th>名称</th><th>分类</th><th>借出数量</th><th>归还数量</th><th>归还时间</th>
            </tr>
            <tr>
                <td>SAMPLE</td><td>SAMPLE</td><td>SAMPLE</td><td>SAMPLE</td><td>SAMPLE</td><td>SAMPLE</td><td>SAMPLE</td><td>SAMPLE</td>
            </tr>
        </tbody>
    </table>
    )
}