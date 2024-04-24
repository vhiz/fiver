import BreadCrumbs from "../components/BreadCrumbs";
import Head from "../components/GigComp/Head";
import CheckOut from "../components/GigComp/CheckOut";
export default function Gig() {
  return (
    <div className="flex gap-24 p-3">
      <div className="lg:flex-[2] w-full">
        <BreadCrumbs page={"Shawn Gutierrez"} cat={"animation"} />

        <Head />
      </div>
      <div className="lg:flex-1 hidden lg:block">
        <CheckOut />
      </div>
    </div>
  );
}
