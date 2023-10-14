import { createBrowserRouter } from "react-router-dom";
import DashboardBanner from "../pages/Dashboard/DashboardBanner/DashboardBanner";
import AddedPackages from "../pages/Dashboard/DashboardPackages/AddedPackages";
import DashboardPackages from "../pages/Dashboard/DashboardPackages/DashboardPackages";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "./../layouts/Dashboard";
import Main from "./../layouts/Main";
import AdminHome from "./../pages/Dashboard/AdminHome/AdminHome";
import Home from "./../pages/HomeSection/Home/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//     //   errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/login",
//         element: <Login></Login>,
//       },
//       {
//         path: "/sign-up",
//         element: <SignUp></SignUp>,
//       },
//     ],
//   },
// ]);

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
  {
    path: "dashboard",
    element: (
      // <PrivateRoute>
      <Dashboard />
      // </PrivateRoute>
    ),
    children: [
      {
        path: "admin-home",
        element: <AdminHome />,
      },
      {
        path: "banner",
        element: <DashboardBanner />,
      },
      {
        path: "popular-packages",
        element: <DashboardPackages />,
      },
      {
        path: "added-package",
        element: <AddedPackages />,
      },
    ],
  },
]);

export default router;
