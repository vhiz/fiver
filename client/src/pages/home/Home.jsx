import "./home.scss";
import React, { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

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
      title:'Ritika, Shoemaker, Desinger '
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
    }, 6000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="home">
      {/* <h1>{data[currentIndex].img}</h1> */}
      <Navbar color={data[currentIndex].color} />
      <Featured img={data[currentIndex].img} name={data[currentIndex].title} />
      <Footer />
    </div>
  );
}
