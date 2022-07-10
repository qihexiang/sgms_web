import "../../sncGoods.css";
import "../../webCss1.css";
import "../../webCss2.css";
import ShowNavigateLeft from "../../../components/navigateBar";
import ShowBuyList from "../../../components/buyList";

// 凡是从SNCgoods里面摘的html代码都直接无脑导入上面三个样式
function ShowBuyUpdate() {
    return (
        <div className="row box">
            <ShowNavigateLeft></ShowNavigateLeft>
            <div>
                <h1>购买更新</h1>
                <button>
                    <a href="register1.html">更新登记</a>
                </button>
                <br></br>
                    <p>
                        搜索<input type="text" name="" id=""></input>
                    </p>
                    <ShowBuyList></ShowBuyList>
            </div>
        </div>
    );
}
export default ShowBuyUpdate;