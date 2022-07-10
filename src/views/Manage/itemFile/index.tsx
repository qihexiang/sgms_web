import "../../sncGoods.css";
import "../../webCss1.css";
import "../../webCss2.css";
import ShowNavigateLeft from "../../../components/navigateBar";
import ShowItemlist from "../../../components/itemList";

// 凡是从SNCgoods里面摘的html代码都直接无脑导入上面三个样式

function ShowItemflie() {
    return (
        <div className="row box">
            <ShowNavigateLeft></ShowNavigateLeft>
            <div>
                <h1>物品状态</h1>
                <button>
                    <a href="register1">登记</a>
                </button>
                <br></br>
                    <p>
                        搜索<input type="text" name="" id=""></input>
                    </p>
                    <ShowItemlist></ShowItemlist>
            </div>
        </div>
    );
}

export default ShowItemflie;
