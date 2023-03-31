import React from "react";
import "./slider.scss";
import Slider from "infinite-react-carousel";

export default function Slide({ h1, slidesToShow, arrowsScroll, children }) {
  const settings = {
    slidesToShow: slidesToShow,
    arrowsScroll: arrowsScroll,
  };
  return (
    <div className="slide">
      <div className="contanier">
        <h1>{h1}</h1>
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
}
