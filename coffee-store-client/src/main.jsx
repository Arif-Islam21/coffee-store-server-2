import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import Homepage from "./Components/Homepage.jsx";
import ErrorElement from "./Components/ErrorElement.jsx";
import ViewCoffee from "./Components/ViewCoffee.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Users from "./Components/Users.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER_API}/${params.id}`),
      },
      {
        path: "viewCoffee/:id",
        element: <ViewCoffee></ViewCoffee>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER_API}/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/users",
        element: (
          <PrivateRoute>
            <Users></Users>
          </PrivateRoute>
        ),
        loader: () => fetch(`${import.meta.env.VITE_SERVER_API}/users`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
