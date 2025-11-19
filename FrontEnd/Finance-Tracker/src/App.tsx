import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Component/Sidebar";
import Header from "./Component/Header";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" flex-1">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
