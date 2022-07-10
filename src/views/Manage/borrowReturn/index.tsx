import "../../sncGoods.css";
import "../../webCss1.css";
import "../../webCss2.css";
import ShowNavigateLeft from "../../../components/navigateBar";
import ShowBorrowList from "../../../components/borrowList";
import ShowReturnList from "../../../components/returnList";
// 凡是从SNCgoods里面摘的html代码都直接无脑导入上面三个样式
function ShowBorrowReturn() {
    return (
        <div className="row box">
            <ShowNavigateLeft></ShowNavigateLeft>
            <div>
                <h1>借还记录</h1>
                <button>
                    <a href="register1.html">借出登记</a>
                </button>
                <button>
                    <a href="register1.html">归还登记</a>
                </button>
                <br></br>
                    <p>
                        搜索<input type="text" name="" id=""></input>
                    </p>
                    <ShowBorrowList></ShowBorrowList>
                    <br></br>
                    <ShowReturnList></ShowReturnList>
            </div>
        </div>
    );
}
export default ShowBorrowReturn;