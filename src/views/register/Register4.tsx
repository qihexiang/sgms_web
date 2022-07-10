import "../sncGoods.css";
import "../webCss1.css";
import "../webCss2.css";
import ShowNavigateLeft from "../../components/navigateBar";
import Register4 from "../../components/register4";

// 凡是从SNCgoods里面摘的html代码都直接无脑导入上面三个样式

function ShowRegister4() {
    return (
        <div className="row box">
            <ShowNavigateLeft></ShowNavigateLeft>
            <div>
                    <Register4></Register4>
            </div>
        </div>
    );
}

export default ShowRegister4;