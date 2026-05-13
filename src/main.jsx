import React from 'react';
import ReactDOM from 'react-dom/client';

import { 
  createHashRouter, 
  RouterProvider 
} from 'react-router-dom';

import EnterPage from './pages/EnterPage/EnterPage';
import ProductPage from './pages/ProductPage/ProductPage'
import CartPage from './pages/CartPage/CartPage'

const router = createHashRouter([
  { path: "/", element: <EnterPage /> },
  { path: "/productpage", element: <ProductPage /> },
  { path: "/cart", element: <CartPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


