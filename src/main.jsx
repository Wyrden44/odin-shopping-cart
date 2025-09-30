import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Shop from './components/Shop.jsx';
import Home from './components/Home.jsx';
import Cart from './components/Cart.jsx';
import ProductPage, { addToCart, loader as productLoader } from "./components/ProductPage.jsx";
import { getProduct } from './fetcher.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "product/:productId",
        element: <ProductPage />,
        loader: productLoader,
        action: addToCart,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
