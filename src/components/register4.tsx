import "../views/Manage/personManagement/sncGoods4.css";

function Register4() {
    return (
        <div className="ItemFileRegister">
            <h1 className="title">人员管理</h1>
            <form action="" method="" name="">
                <h2>人员登记</h2>
                名字<input className="memberName"></input><br></br>
                部门<select className="classification" name="" id="catagory">
                <option value="">--请选择--</option>
                <option value="">办公室</option>
                <option value="">系统维护部</option>
                <option value="">开发部</option>
                <option value="">UI设计部</option>
                <option value="">媒体运营部</option>
                <option value="">市场部</option>
                <option value="">宣传部</option>
                <option value="">已退部</option>
                </select><br></br>
                学号<input className="memberName"></input><br></br>
                联系方式<input className="memberName"></input><br></br>
            <button className="determine">
                <a href="/manage/personManagement">确定</a>
            </button>
            <button className="reset">
                重置
            </button>
        </form>
    </div>
    );
}

export default Register4;
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