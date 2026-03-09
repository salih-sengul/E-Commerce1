import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import "./index.css";
import ProductPage from "./pages/ProductPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "shop/product",
        element: <ProductPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
