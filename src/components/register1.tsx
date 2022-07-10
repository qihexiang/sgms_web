import "../views/Manage/itemFile/sncGoods1.css";

function Register1() {
    return (
        <div>
            <span>
                <h1>物品档案</h1>
            </span>
        <div className="ItemFileRegister">
            <form action="" method="" name="">
                名称 <input className="objectName"></input><br></br>

                分类<select className="classification" name="" id="catagory">
                <option value="">--请选择--</option>
                <option value="">非消耗品</option>
                <option value="">消耗品</option>
                </select><br></br>

            标签<input className="tag" id="tags"></input><br></br>

            用途 <textarea className="objectUse" name="" id="use"></textarea><br></br>

            数量<input className="objectName"></input><br></br>

            放置位置<textarea className="objectPosition" name="" id="place"></textarea><br></br>

            登记人员学号 <input className="personId" id="memberId"></input><br></br>

            <button className="determine">
                <a href="/manage/itemfile">确定</a>
            </button>
            <button type="reset">
                重置
            </button>
        </form>
    </div>
    </div>
    );
}

export default Register1;
