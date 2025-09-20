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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
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
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
