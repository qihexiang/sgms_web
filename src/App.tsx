import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShowButton from "./components/firstpage";
import Managing from "./views/Manage";
import ShowItemflie from "./views/Manage/itemFile";

function App() {
  return (
    <div className="function-area">
      <Routes>
        <Route path="/" element={<ShowButton></ShowButton>} />
        <Route path="/manage" element={<Managing></Managing>} />
        <Route path="/manage/itemFile" element={<ShowItemflie></ShowItemflie>} />
      </Routes>
    </div>
  );
}

export default App;
