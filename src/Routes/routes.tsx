import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Homelayout";
import Home from "../Page/Home";

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
]);
