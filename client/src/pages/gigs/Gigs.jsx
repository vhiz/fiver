import { useState } from "react";
import "./gigs.scss";
import GigCard from "../../components/gigcard/GigCard";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";

export default function Gigs() {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const { search } = useLocation();
  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const [prices, setPrices] = useState({
    min: 0,
    max: 9999,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrices((prevInputs) => ({ ...prevInputs, [name]: value }));
  };
  const {
    error,
    isLoading,
    data: gigs,
  } = useQuery(["gigs",search, prices, sort], async () => {
    const res = await makeRequest.get(
      `/gigs${search}&minPrice=${prices.min}&maxPrice=${prices.max}&sort=${sort}`
    );
    return res.data;
  });

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
            <input
              type="number"
              placeholder="min"
              min={0}
              name="min"
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="max"
              min={0}
              name="max"
              onChange={handleChange}
            />
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
          {isLoading ? (
            <div className="load">
              <img src="/icon/loading.gif" alt="" />
            </div>
          ) : error ? (
            <div className="load">
              <img src="/icon/error.gif" alt="" />
            </div>
          ) : (
            gigs.map((item) => <GigCard key={item._id} item={item} />)
          )}
        </div>
      </div>
    </div>
  );
}
