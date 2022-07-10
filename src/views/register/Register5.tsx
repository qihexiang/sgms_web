import "../sncGoods.css";
import "../webCss1.css";
import "../webCss2.css";
import ShowNavigateLeft from "../../components/navigateBar";
import Register5 from "../../components/register5";

// 凡是从SNCgoods里面摘的html代码都直接无脑导入上面三个样式

function ShowRegister5() {
    return (
        <div className="row box">
            <ShowNavigateLeft></ShowNavigateLeft>
            <div>
                    <Register5></Register5>
            </div>
        </div>
    );
}

export default ShowRegister5;