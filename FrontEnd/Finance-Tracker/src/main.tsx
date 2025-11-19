import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login.tsx";
import Signup from "./Pages/Signup.tsx";
import ResetPassword from "./Pages/ResetPassword.tsx";

import App from "./App.tsx";
import Header from "./Component/Header.tsx";
import Homepage from "./Pages/Homepage.tsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // { path: "/", element: <Homepage /> },
      { path: "/", element: <Homepage /> },
      { path: "/l", element: <Login /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/header",
    element: <Header />,
  },

  {
    path: "/resetpassword",
    element: <ResetPassword />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
