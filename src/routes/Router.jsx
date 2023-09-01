import { createBrowserRouter } from "react-router-dom";
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
    ],
  },
]);

export default router;