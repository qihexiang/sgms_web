import "../sncGoods.css";
import "../webCss1.css";
import "../webCss2.css";
import ShowNavigateLeft from "../../components/navigateBar";
import Register1 from "../../components/register1";

// 凡是从SNCgoods里面摘的html代码都直接无脑导入上面三个样式

function ShowRegister1() {
    return (
        <div className="row box">
            <ShowNavigateLeft></ShowNavigateLeft>
            <div>
                    <Register1></Register1>
            </div>
        </div>
    );
}

export default ShowRegister1;
