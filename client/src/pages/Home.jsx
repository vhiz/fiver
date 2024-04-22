import Categories from "../components/Categories";
import Features from "../components/Features";
import Header from "../components/Header";
import Recent from "../components/Recent";

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <Features />
      <Recent />
    </div>
  );
}
