// import { useNavigate} from 'react-router'
export default function ShowNavigateLeft() {
  // const navi = useNavigate()
  return (
    <div className="list-box col-xs-12 col-md-3">
      <div className="list-group">
        <a className="list-group-item active">导航栏</a>
        <a href="/manage/itemFile" className="list-group-item sub-nav">
          物品档案
        </a>
        <a
          href="/manage/borrowReturn" className="list-group-item sub-nav">
          借还记录
        </a>
        <a href="/manage/buyUpdate" className="list-group-item sub-nav">
          购买更新
        </a>
        <a href="/manage/personManagement" className="list-group-item sub-nav">
          人员管理
        </a>
      </div>
    </div>
  );
}
