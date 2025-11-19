import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Component/Sidebar";
import Header from "./Component/Header";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex">
        <Sidebar />
        <div className=" flex-1">
          <Header />

          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
