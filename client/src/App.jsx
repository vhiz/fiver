import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'swiper/css';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Gigs from "./pages/Gigs";
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
