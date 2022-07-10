import "../sncGoods.css"
import "../webCss1.css"
import "../webCss2.css"

// 凡是从SNCgoods里面摘的html代码都直接无脑导入上面三个样式

function Manageing() {
    return (
        
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
    );
}

export default Manageing;