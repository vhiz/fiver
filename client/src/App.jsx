import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'swiper/css';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Gigs from "./pages/Gigs";
import Gig from "./pages/Gig";
export default function App() {
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
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
