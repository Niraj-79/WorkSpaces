import React from "react";
import ReactDOM from "react-dom/client";
import App from ".routes/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./components/Bag.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "/bag",
        element: <Bag />,
        /*action: createPostAction,*/
      },
    ],
  },
]);
ReactDome.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <routerProvider router={router} />
  </React.StrictMode>
);
