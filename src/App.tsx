import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShowButton from "./components/firstpage";
import Managing from "./views/Manage";
import ShowItemflie from "./views/Manage/itemFile";
import ShowBorrowReturn from "./views/Manage/borrowReturn";
import ShowBuyUpdate from "./views/Manage/buyUpdate";
import ShowPersonManagement from "./views/Manage/personManagement";
import ShowRegister1 from "./views/Manage/itemFile/register1";

function App() {
  return (
    <div className="function-area">
      <Routes>
        <Route path="/" element={<ShowButton></ShowButton>} />
        <Route path="/manage" element={<Managing></Managing>} />
        <Route path="/manage/itemFile" element={<ShowItemflie></ShowItemflie>} />
        <Route path="/manage/borrowReturn" element={<ShowBorrowReturn></ShowBorrowReturn>} />
        <Route path="/manage/buyUpdate" element={<ShowBuyUpdate></ShowBuyUpdate>} />
        <Route path="/manage/personManagement" element={<ShowPersonManagement></ShowPersonManagement>} />
        <Route path="/manage/itemFile" element={<ShowRegister1></ShowRegister1>} />
      </Routes>
    </div>
  );
}

export default App;
