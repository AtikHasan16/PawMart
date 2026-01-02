import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import PetsSupply from "../Pages/PetsSupply";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddListing from "../Pages/AddListing";
import MyListing from "../Pages/MyListings";
import ErrorPage from "../Error/ErrorPage";
import MyOrders from "../Pages/MyOrders";
import GuestRouter from "./GuestRouter";
import PrivateRoute from "./PrivateRoute";
import CategoryProducts from "../Pages/CategoryProducts";
import axios from "axios";
import LoadingSpinner from "../Components/LoadingSpinner";
import ProductDetails from "../Pages/ProductDetails";
import UpdateListing from "../Pages/UpdateListing";
import { AboutUs } from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import Support from "../Pages/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () =>
          axios("https://paw-mart-server.vercel.app/recent-listings"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/pets-supply",
        element: <PetsSupply></PetsSupply>,
        loader: () => axios("https://paw-mart-server.vercel.app/all-products"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/category-filtered-product/:categoryName",
        element: <CategoryProducts></CategoryProducts>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/support",
        element: <Support></Support>,
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
        path: "/update-listing/:id",
        element: (
          <PrivateRoute>
            <UpdateListing></UpdateListing>
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
