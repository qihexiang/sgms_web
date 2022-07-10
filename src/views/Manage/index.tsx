import "../sncGoods.css"
import "../webCss1.css"
import "../webCss2.css"
import ShowNavigateLeft from "../../components/navigateBar";

// 凡是从SNCgoods里面摘的html代码都直接无脑导入上面三个样式

function Manageing() {
    return (
        <div className="row box">
        <ShowNavigateLeft></ShowNavigateLeft>
        </div>
    );
}

export default Manageing;