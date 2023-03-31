import React from "react";
import "./business.scss";

export default function Business() {
  return (
    <div className="business">
      <div className="contanier">
        <div className="item">
          <h1>
            <i>fiverr</i> business.
          </h1>
          <h1>
            A business solution designed for <i>teams</i>
          </h1>

          <p>
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </p>
          <div className="title">
            <img src="/icon/check.png" alt="" />
            Connect to freelancers with proven business experience
          </div>
          <div className="title">
            <img src="/icon/check.png" alt="" />
            Get matched with the perfect talent by a customer success manager
          </div>
          <div className="title">
            <img src="/icon/check.png" alt="" />
            Manage teamwork and boost productivity with one powerful workspace
          </div>
          <button>Explore Fiverr Business</button>
        </div>
        <div className="item">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
