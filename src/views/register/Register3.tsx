import "../sncGoods.css";
import "../webCss1.css";
import "../webCss2.css";
import ShowNavigateLeft from "../../components/navigateBar";
import Register3 from "../../components/register3";

// 凡是从SNCgoods里面摘的html代码都直接无脑导入上面三个样式

function ShowRegister3() {
    return (
        <div className="row box">
            <ShowNavigateLeft></ShowNavigateLeft>
            <div>
                    <Register3></Register3>
            </div>
        </div>
    );
}

export default ShowRegister3;