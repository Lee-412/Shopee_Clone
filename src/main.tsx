import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import React from 'react';
import HomePage from './homepage/homepage.tsx';
import LoginComponent from './account/login/login.tsx';

// router web
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "Login",
        element: <LoginComponent />,
      },
      {
        path: "Register",
        element: <LoginComponent />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
