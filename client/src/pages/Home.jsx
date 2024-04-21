import Categories from "../components/Categories";
import Header from "../components/Header";
import Recent from "../components/Recent";

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <Recent/>
    </div>
  );
}
