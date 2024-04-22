import Business from "../components/Business";
import Categories from "../components/Categories";
import Features from "../components/Features";
import Header from "../components/Header";
import Recent from "../components/Recent";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <Features />
      <Testimonials />
      <Business />
      <Recent />
    </div>
  );
}
