import "../../sncGoods.css";
import "../../webCss1.css";
import "../../webCss2.css";


function ShowItemflie() {
    return (
        <div>
        <div className="row box">
            <div className="list-box col-xs-12 col-md-3">
                <div className="list-group">
                <a className="list-group-item active">导航栏</a>
                <a href="itemFile.html" className="list-group-item sub-nav">物品档案</a>
                <a href="borrowReturn.html" className="list-group-item sub-nav">借还记录</a>
                <a href="buyUpdate.html" className="list-group-item sub-nav">购买更新</a>
                <a href="personManagement.html" className="list-group-item sub-nav">人员管理</a>
                </div>
            </div>
        </div>
        <div>
                <h1>借还记录</h1>
                <button>
                    <a href="register2.html">借出登记</a>
                </button>
                <button>
                    <a href="register5.html">归还登记</a>
                </button>
                <br></br>
                    <p>
                        搜索<input type="text" name="" id=""></input>
                    </p>
                    <table className="table11_7">
                        <tbody>
                            <tr>
                                <th>名称</th><th>分类</th><th>数量</th><th>借出数量</th><th>放置位置</th>
                            </tr>
                            <tr>
                                <td>物品一</td><td>SAMPLE</td><td>SAMPLE</td><td>SAMPLE</td><td>SAMPLE</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    );
}

export default ShowItemflie;
