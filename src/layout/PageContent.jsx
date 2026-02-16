import React from "react";
import HomePage from "../pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router";
import ShopPage from "@/pages/ShopPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
]);

const PageContent = () => {
  return <RouterProvider router={router} />;
};

export default PageContent;
