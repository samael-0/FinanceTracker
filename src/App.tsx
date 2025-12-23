import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Component/Sidebar";
import Header from "./Component/Header";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-screen ">
        <Sidebar />
        <div className=" flex flex-col w-full">
          <Header />

          <div className="flex-1 overflow-y-auto no-scrollbar bg-bgcolor [&>div]:bg-white">
            <Outlet />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
