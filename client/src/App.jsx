import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "swiper/css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Gigs from "./pages/Gigs";
import Gig from "./pages/Gig";
import MyGigs from "./pages/MyGigs";
import Orders from "./pages/Orders";
import Messages from "./pages/Messages";
import useUserStore from "./useStore/useUserStore";
import { gigsLoader, myGigLoader } from "./loader";

export default function App() {
  const { currentUser } = useUserStore();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          loader: gigsLoader,
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ],
    },
    {
      path: "/",
      element: !currentUser ? <Navigate to={"/"} /> : <Layout />,
      children: [
        {
          path: "/mygigs",
          loader: myGigLoader,
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
