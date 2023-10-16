import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css'
import './tailwindTop.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home'
import Verification from './pages/Verification'
import Alerts from './pages/Alerts'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/verify",
      element: <Verification />
    },
    {
      path: "/alerts",
      element: <Alerts />
    }
  ]);

  return(
    <RouterProvider router={router} />
  )
}

