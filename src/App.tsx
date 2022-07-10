import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShowButton from "./components/firstpage";
import Managing from "./views/Manage";
import ShowItemflie from "./views/Manage/itemFile";
import ShowBorrowReturn from "./views/Manage/borrowReturn";
import ShowBuyUpdate from "./views/Manage/buyUpdate";
import ShowPersonManagement from "./views/Manage/personManagement";
import ShowRegister1 from "./views/register/Register1";
import ShowRegister2 from "./views/register/Register2";
import ShowRegister3 from "./views/register/Register3";
import ShowRegister4 from "./views/register/Register4";
import ShowRegister5 from "./views/register/Register5";
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
        <Route path="/manage/itemFile/register1" element={<ShowRegister1></ShowRegister1>} />
        <Route path="/manage/borrowReturn/register2" element={<ShowRegister2></ShowRegister2>} />
        <Route path="/manage/buyUpdate/register3" element={<ShowRegister3></ShowRegister3>} />
        <Route path="/manage/personManagement/register4" element={<ShowRegister4></ShowRegister4>} />
        <Route path="/manage/borrowReturn/register5" element={<ShowRegister5></ShowRegister5>} />
      </Routes>
    </div>
  );
}

export default App;
