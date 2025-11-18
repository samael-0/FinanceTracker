import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Component/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
