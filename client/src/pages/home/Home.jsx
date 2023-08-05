import "./home.scss";
import React, { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Trusted from "../../components/trusted/Trusted";
import Slide from "../../components/slider/Slider";
import { cards,} from "../../data";
import CatCard from "../../components/catCard/CatCard";
import Features from "../../components/features/Features";
import Business from "../../components/business/Business";
import ProjectCard from "../../components/projectCard/ProjectCard";
import GigCard from "../../components/gigcard/GigCard";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    {
      id: 1,
      img: "/img/1.webp",
      color: "#1b1a1d",
      title: "Valentina, AI Artist",
    },
    {
      id: 2,
      img: "/img/2.webp",
      color: "#8d2806",
      title: "Gabriella Video Editor",
    },
    {
      id: 3,
      img: "/img/3.webp",
      color: "#013b17",
      title: "Zach , Bar Owner",
    },
    {
      id: 4,
      img: "/img/4.webp",
      color: "#60192a",
      title: "Ritika, Shoemaker, Desinger ",
    },
    {
      id: 5,
      img: "/img/5.webp",
      color: "#a83e59",
      title: "Moon, Marketing Exprert",
    },
    {
      id: 6,
      img: "/img/6.webp",
      color: "#014019",
      title: "Andrea, Fashion Desingner",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * data.length);
      setCurrentIndex(randomIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  const {
    error,
    isLoading,
    data: gigs,
  } = useQuery(["randomgigs"], async () => {
    const res = await makeRequest.get(`/gigs?ramdom`);
    return res.data;
  });

  return (
    <div className="home">
      <Navbar color={data[currentIndex].color} />
      <Featured img={data[currentIndex].img} name={data[currentIndex].title} />
      <Trusted />
      {isLoading ? (
        <div className="load">
          <img src="/icon/loading.gif" alt="" />
        </div>
      ) : error ? (
        <div className="load">
          <img src="/icon/error.gif" alt="" />
        </div>
      ) : gigs.length === 0 ? null : (
        <Slide h1={"Recently Viewed & More "} arrowsScroll={3} slidesToShow={3}>
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </Slide>
      )}
      <Slide
        h1={"Popular professional services"}
        arrowsScroll={4}
        slidesToShow={4}
      >
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <Features />
      {/* <Business /> */}
      {isLoading ? (
        <div className="load">
          <img src="/icon/loading.gif" alt="" />
        </div>
      ) : error ? (
        <div className="load">
          <img src="/icon/error.gif" alt="" />
        </div>
      ) : gigs.length === 0 ? null : (
        <Slide
          h1={"Get inspired with projects made by our freelancers"}
          arrowsScroll={4}
          slidesToShow={4}
        >
          {gigs.map((card) => (
            <ProjectCard key={card._id} item={card} />
          ))}
        </Slide>
      )}
      <Footer />
    </div>
  );
}
