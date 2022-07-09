import { useNavigate} from 'react-router'
export default function ShowButton(){
    const navi = useNavigate()
    return(
    <div className="buttoncontainer">
        <button id="navigate-borrow" onClick={()=>navi("/borrow")}>借</button>
        <button id="navigate-return" onClick={()=>navi("/return")}>还</button>
        <button id="navigate-manage" onClick={()=>navi("/manage")}>管理</button>
    </div>
    )
}

//这种跳转方式好像不太可行
function clickBorrow(){
    window.location.href="#/borrow"
}
function clickReturn(){
    window.location.href="#/return"
}
function clickManage(){
    window.location.href="/manage"
}