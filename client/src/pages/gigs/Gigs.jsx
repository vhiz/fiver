import { useState } from "react";
import "./gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/gigcard/GigCard";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

export default function Gigs() {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };
  return (
    <div className="gigs">
      <div className="contanier">
        <Breadcrumbs />
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span> :
            <input type="number" placeholder="min" min={0} />
            <input type="number" placeholder="max" min={0} />
            <button>Apply</button>
          </div>
          <div className="right">
            <span>Sort by</span> :
            <span>
              {sort === "sales"
                ? "Best selling"
                : sort === "createdAt"
                ? "Newest"
                : null}
            </span>
            <img src="/icon/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightmenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="cards">
          {gigs.map((item) => (
            <GigCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
