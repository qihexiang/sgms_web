import { type } from "os"

export default function ShowBuyList(){
    type buyList = {
                名称:string,
                分类:string,
                数量:number,
                购买数量:number,
                更新时间:number,
    }

    return(
        <table className="table11_7">
        <tbody>
            <tr>
                <th>名称</th><th>分类</th><th>数量</th><th>购买数量</th><th>更新时间</th>
            </tr>
            <tr>
                <td>SAMPLE</td><td>SAMPLE</td><td>SAMPLE</td><td>SAMPLE</td><td>SAMPLE</td>
            </tr>
        </tbody>
    </table>
    )
}