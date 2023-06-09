"use client";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useState } from "react";
import Slider from "react-slick";


const responsive = {
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const cityList = [
  {
    name: "Cali",
    image: "/assets/images/home/ciudades/cali.png",
  },
  {
    name: "Bogotá",
    image: "/assets/images/home/ciudades/bogota.png",
  },
  {
    name: "Medellín",
    image: "/assets/images/home/ciudades/medellin.png",
  },
];

const Ciudades = () => {
  const [hover, setHover] = useState(null);

  const handleMouseOver = (prop) => (event) => {
    setHover(prop);
  };

  return (
    <div className="container mx-auto xl:px-36 lg:px-36 px-0">
      <div className={"w-full md:px-24 sm:px-16 px-10 py-16 bg-white mb-16 sm:-mt-32 6"}>
        <Typography
          variant="h5"
          className="font-bold text-center mb-8"
          color="#2D3145"
        >
          ¡Aquí podrás
          <span style={{ color: "#5346DD" }}> encontrarnos</span>
        </Typography>
        <div >
        <Slider
        infinite
        rows
        dots
        autoplay
        autoplaySpeed={3000}
        arrows={false}
        swipe
        swipeToSlide
        slidesToShow={
          cityList?.length === 1
            ? 1
            : cityList?.length === 2
            ? 2
            : cityList?.length === 3
            ? 3
            : 4
        }
        {...responsive}
      >
          {cityList.map((city, index) => (
            <div key={index} className="flex justify-center">
              <div
                style={{
                  backgroundImage:
                    hover === index
                      ? `url(${city.image})`
                      : `linear-gradient(0deg, rgba(0,0,0,0.5) 100%, rgba(255,255,255,1) 100%), url(${city.image})`,
                  backgroundBlendMode: "normal-luminosity",
                  borderRadius: 16,
                }}
                className="bg-cover bg-no-repeat bg-center w-full flex items-end justify-center max-w-[220px] min-h-[220px]"
                onMouseOver={handleMouseOver(index)}
                onMouseLeave={handleMouseOver(null)}
              >
                <Typography
                  variant="h6"
                  className="font-bold text-center my-8"
                  color="#fff"
                >
                  {city.name}
                </Typography>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Ciudades;
