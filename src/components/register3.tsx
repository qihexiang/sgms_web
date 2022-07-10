import "../views/Manage/buyUpdate/sncGoods3.css";

function Register3() {
    return (
        <div className="ItemFileRegister">
            <h1 className="title">购买更新</h1>
            <form action="" method="" name="">
                <h2>更新登记</h2>
                名称 <input className="objectName"></input><br></br>

                分类<select className="classification" name="" id="catagory">
                <option value="">--请选择--</option>
                <option value="">学习用品</option>
                <option value="">办公用品</option>
                <option value="">宣传用品</option>
                <option value="">生活用品</option>
                </select><br></br>
            数量<input className="objectName"></input><br></br>
            购买数量<input className="objectName"></input><br></br>
            丢失数量<input className="objectName"></input><br></br>
            更新时间<input className="changeTime"></input><br></br>
            <button className="determine">
                <a href="/manage/buyUpdate">确定</a>
            </button>
            <button className="reset">
                重置
            </button>
        </form>
    </div>
    );
}

export default Register3;
// .changeTime{
//     font-style: normal;
//     width: 200px;
//     height: 30px;
//     border: 1px solid rgb(34, 33, 23);
//     padding: 3px;
//     margin-left: 50px;
//     margin-top: 40px;
// }