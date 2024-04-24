import BreadCrumbs from "../components/BreadCrumbs";

export default function Gig() {
  return (
    <div className="flex gap-24 p-3">
      <div className="flex-[1.7]">
        <BreadCrumbs page={'Shawn Gutierrez'} cat={'animation'}/>
      </div>
      <div className="flex-1">b</div>
    </div>
  );
}
