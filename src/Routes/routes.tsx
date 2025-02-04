import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Homelayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import Home from "../Page/Home";
import Dashboard from "../Page/dashboard/Dashboard";
import Earn from "../Page/dashboard/Earn";
import Advertise from "../Page/dashboard/Advertise";
import Support from "../Page/dashboard/Support";
import Refer from "../Page/dashboard/Refer";
import MarketPlace from "../Page/dashboard/MarketPlace";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      {
        path: "earn",
        element: <Earn />,
      },
      {
        path: "advertise",
        element: <Advertise />,
      },
      {
        path: "support",
        element: <Support/>,
      },
      {
        path: "refer",
        element: <Refer/>,
      },
      {
        path: "Market-place",
        element: <MarketPlace/>,
      },
  
    ],
  },
]);
