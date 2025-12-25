import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Courses from "../Pages/Courses";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import CouresDetails from "../components/CouresDetails";
import Home from "../Pages/Home";
import NotFound from "../components/NotFound";

const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "courses/:id",
        element: <CouresDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default route;
