import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import PetsSupply from "../Pages/PetsSupply";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddListing from "../Pages/AddListing";
import MyListing from "../Pages/MyListing";
import ErrorPage from "../Error/ErrorPage";
import MyOrders from "../Pages/MyOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/pets", element: <PetsSupply></PetsSupply> },
      { path: "/add-products", element: <AddListing></AddListing> },
      { path: "/my-products", element: <MyListing></MyListing> },
      { path: "/my-orders", element: <MyOrders></MyOrders> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);

export default router;
