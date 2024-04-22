import { Link } from "react-router-dom";

export default function BreadCrumbs() {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <a>
            <Link to={"/"}>Home</Link>
          </a>
        </li>
        <li>Animations</li>
      </ul>
    </div>
  );
}
