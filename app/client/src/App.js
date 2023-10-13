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

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/verify",
      element: <Verification />
    }
  ]);

  return(
    <RouterProvider router={router} />
  )
}

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

// export default function App() {
//   return (
//     <>
//     <Home></Home>
//     <BrowserRouter>
//       <Routes>
//         <Route component={Home} path="/" />
//         <Route component={Verification} path="/verify" />
//       </Routes>
//     </BrowserRouter>
//     </>
//   )
// }