import { Link } from "react-router-dom";

export default function BreadCrumbs({page}) {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <a>
            <Link to={"/"}>Home</Link>
          </a>
        </li>
        <li className="capitalize">{page}</li>
      </ul>
    </div>
  );
}
