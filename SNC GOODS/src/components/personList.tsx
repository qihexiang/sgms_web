import { type } from "os"

export default function ShowPersonList(){
    type personList = {
                名字:string,
                部门:string,
                学号:number,
                联系方式:number,
    }
    return(
        <table className="table11_7">
        <tbody>
            <tr>
                <th>名字</th><th>部门</th><th>学号</th><th>联系方式</th>
            </tr>
            <tr>
                <td>SAMPLE</td><td>SAMPLE</td><td>SAMPLE</td><td>SAMPLE</td>
            </tr>
        </tbody>
    </table>
    )
}