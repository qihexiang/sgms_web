import "../sncGoods.css";
import "../webCss1.css";
import "../webCss2.css";
import ShowNavigateLeft from "../../components/navigateBar";
import Register2 from "../../components/register2";

// 凡是从SNCgoods里面摘的html代码都直接无脑导入上面三个样式

function ShowRegister2() {
    return (
        <div className="row box">
            <ShowNavigateLeft></ShowNavigateLeft>
            <div>
                    <Register2></Register2>
            </div>
        </div>
    );
}

export default ShowRegister2;