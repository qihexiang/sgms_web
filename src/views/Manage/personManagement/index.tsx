import "../../sncGoods.css";
import "../../webCss1.css";
import "../../webCss2.css";
import ShowNavigateLeft from "../../../components/navigateBar";
import ShowPersonList from "../../../components/personList";

// 凡是从SNCgoods里面摘的html代码都直接无脑导入上面三个样式
function ShowPersonManagement() {
    return (
        <div className="row box">
            <ShowNavigateLeft></ShowNavigateLeft>
            <div>
                <h1>借还记录</h1>
                <button>
                    <a href="personManagement/register4">人员登记</a>
                </button>
                <br></br>
                    <p>
                        搜索<input type="text" name="" id=""></input>
                    </p>
                    <ShowPersonList></ShowPersonList>
            </div>
        </div>
    );
}
export default ShowPersonManagement;