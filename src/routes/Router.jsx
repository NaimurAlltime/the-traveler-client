import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Main from "./../layouts/Main";
import Home from "./../pages/HomeSection/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    //   errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
