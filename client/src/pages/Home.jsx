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
      <Recent tag={"createdAt"} h2={"Latest Posting"} />
      <Features />
      <Testimonials />
      <Business />
      <Recent
        tag={"sales"}
        h2={"Get inspired with projects made by our freelancers"}
      />
    </div>
  );
}
