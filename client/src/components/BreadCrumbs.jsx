import { Link } from "react-router-dom";

export default function BreadCrumbs({ page, cat }) {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        {cat && (
          <li>
              <Link to={`/gigs?cat=${cat}`} className="capitalize">
                {cat}
              </Link>
              <span className="mx-2 opacity-75">{">"}</span>
          </li>
        )}
        <li className="capitalize font-semibold">{page}</li>
      </ul>
    </div>
  );
}
