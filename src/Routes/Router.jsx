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
import GuestRouter from "./GuestRouter";
import PrivateRoute from "./PrivateRoute";
import CategoryProducts from "../Pages/CategoryProducts";
import axios from "axios";
import LoadingSpinner from "../Components/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => axios("http://localhost:3000/recent-listings"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/pets-supply",
        element: <PetsSupply></PetsSupply>,
        loader: () => axios("http://localhost:3000/all-products"),
      },
      {
        path: "/category-filtered-product/:categoryName",

        element: <CategoryProducts></CategoryProducts>,
      },
      {
        path: "/add-products",
        element: (
          <PrivateRoute>
            <AddListing></AddListing>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-products",
        element: (
          <PrivateRoute>
            <MyListing></MyListing>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <GuestRouter>
            <Login></Login>
          </GuestRouter>
        ),
      },
      {
        path: "/register",
        element: (
          <GuestRouter>
            {" "}
            <Register></Register>
          </GuestRouter>
        ),
      },
    ],
  },
]);

export default router;
