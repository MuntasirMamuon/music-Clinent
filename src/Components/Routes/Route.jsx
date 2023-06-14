import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from "../../App";
import MainLayout from "../Layout/MainLayout";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Home from "../Page/Home/Home";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import AllUser from "../Layout/DashboardLayout/AllUsers/AllUser";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../Layout/DashboardLayout/AddClass/AddClass";
import MyClass from "../Layout/DashboardLayout/MyClass/MyClass";
import ManageClass from "../Layout/DashboardLayout/ManageClass/ManageClass";
import Instructors from "../Page/Instructors/Instructors";
import ClassesPage from "../Page/ClassesPage/ClassesPage";
import MySelectedClass from "../Layout/DashboardLayout/Student/MySelectedClass/MySelectedClass";
import Payment from "../Layout/DashboardLayout/Payment/Payment";
import EnrolledStudent from "../Layout/DashboardLayout/EnrolledStudent/EnrolledStudent";
import MyClassPayment from "../Layout/DashboardLayout/Student/MySelectedClass/MyClassPayment";
import ErrorPage from "../../ErrorPage/ErrorPage";

  
  export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
         path:'/',
         element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signup',
            element:<Register></Register>
        },
        {
          path:'instructor',
          element:<Instructors></Instructors>
        },
        {
          path:'allClass',
          element:<ClassesPage></ClassesPage>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children:[
        {
          path:'allUsers',
          element:<AdminRoute><AllUser></AllUser></AdminRoute>
        },
        {
          path:'addClass',
          element:<AddClass></AddClass>
        },
        {
          path:'myClass',
          element:<MyClass></MyClass>
        },
        {
          path:'manageClass',
          element:<AdminRoute><ManageClass></ManageClass></AdminRoute>
          
        },
        {
          path:'mySelectedClass',
          element:<MySelectedClass></MySelectedClass>
        },
        {
          path:'payment/:id',
          element:<Payment></Payment>
        },
        {
          path:'enrolledClass',
          element:<EnrolledStudent></EnrolledStudent>
        },
        {
          path:'enrolledPayments',
          element:<MyClassPayment></MyClassPayment>
        }
      ]
    }
  ]);