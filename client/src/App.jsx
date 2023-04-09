import React from "react";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Orders from "./pages/orders/Orders";
import Add from "./pages/add/Add";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGig from "./pages/myGig/MyGig";
import "./app.scss";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Pay from "./pages/pay/Pay";
import Success from "./pages/success/Success";

export default function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/app",
      element: <Layout />,
      children: [
        {
          path: "gigs",
          element: <Gigs />,
        },
        {
          path: "gig/:id",
          element: <Gig />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "add",
          element: <Add />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
        {
          path: "messages/:id",
          element: <Message />,
        },
        {
          path: "mygig",
          element: <MyGig />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "pay/:id",
          element: <Pay />,
        },
        {
          path: "success",
          element: <Success />,
        },
      ],
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
