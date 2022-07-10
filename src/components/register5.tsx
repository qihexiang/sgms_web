import "../views/Manage/borrowReturn/sncGoods2.css";

function Register5() {
    return (
        <div className="ItemFileRegister">
            <h1 className="title">借还登记</h1>
            <form action="" method="" name="">
                <h2>归还登记</h2>

                借出人ID<input className="memberID"></input><br></br>
                借出人姓名<input className="memberName"></input><br></br>
                登记人ID<input className="memberID"></input><br></br>
                名称<input className="objectName"></input><br></br>
                分类<select className="classification" name="" id="catagory">
                <option value="">--请选择--</option>
                <option value="">学习用品</option>
                <option value="">办公用品</option>
                <option value="">宣传用品</option>
                <option value="">生活用品</option>
                </select><br></br>
            借出数量<input className="objectName"></input><br></br>
            归还数量<input className="objectName"></input><br></br>
            归还时间<input className="changeTime"></input><br></br>
            <button className="determine">
                <a href="/manage/itemfile">确定</a>
            </button>
            <button className="reset">
                重置
            </button>
        </form>
    </div>
    );
}

export default Register5;
// .changeTime{
//     font-style: normal;
//     width: 200px;
//     height: 30px;
//     border: 1px solid rgb(34, 33, 23);
//     padding: 3px;
//     margin-left: 50px;
//     margin-top: 40px;
// }
// .memberID{
//     width: 200px;
//     height: 40px;
//     border: 1px solid rgb(34, 33, 23);
//     padding: 3px;
//     margin-left: 50px;
//     margin-top: 30px;
//     border-radius: 15px
// }
// .memberName{
//     width: 200px;
//     height: 40px;
//     border: 1px solid rgb(34, 33, 23);
//     padding: 3px;
//     margin-left: 50px;
//     margin-top: 30px;
//     border-radius: 15px
// }