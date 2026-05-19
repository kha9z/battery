import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminPage from './pages/AdminPage/AdminPage';

import { 
  createHashRouter, 
  RouterProvider 
} from 'react-router-dom';

import ProductPage from './pages/ProductPage/ProductPage'
import CartPage from './pages/CartPage/CartPage'

const router = createHashRouter([
  { path: "/", element: <ProductPage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/admin", element: <AdminPage />}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


