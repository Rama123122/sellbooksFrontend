import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashBoardLayout from "../dashboard/DashBoardLayout";
import DashBoard from "../dashboard/DashBoard";
import UploadBook from "../dashboard/UploadBook";
import EditBooks from "../dashboard/EditBooks";
import ManageBook from "../dashboard/ManageBook";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children : [
        {
            path:'/',
            element:<PrivateRoute><Home /></PrivateRoute>
        },
        {
            path:'/shop',
            element:<Shop />
        },
        {
            path:'/about',
            element:<About />
        },
        {
            path:'/blog',
            element:<Blog />
        },
        {
            path:"/book/:id",
            element:<SingleBook />,
            loader:({params}) => fetch(`https://sellbooks.onrender.com/book/${params.id}`)
        }
      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashBoardLayout />,
      children : [
        {
          path:"/admin/dashboard",
          element:<DashBoard />
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook />
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBook />
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBooks />,
          loader:({params}) => fetch(`https://sellbooks.onrender.com/book/${params.id}`)
        }
      ]
    },
    {
      path:"sign-up",
      element:<SignUp />
    },
    {
      path:"login",
      element:<Login />
    },
    {
      path:"logout",
      element:<Logout />
    }
  ]);

  export default router;