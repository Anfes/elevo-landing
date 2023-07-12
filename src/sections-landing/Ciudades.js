"use client";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useState } from "react";
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  box: {
    boxShadow: "0px 4px 40px rgba(45, 49, 69, 0.1)",
    borderRadius: 16,
  },
}));

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
  const classes = useStyles();

  const [hover, setHover] = useState(null);

  const handleMouseOver = (prop) => (event) => {
    setHover(prop);
  };


  return (
    <div className="container mx-auto xl:px-36 lg:px-36 px-0">
      <div className={clsx(classes.box, "w-full md:px-[76px] sm:px-16 px-8 py-12 bg-white sm:mb-40 mb-20 sm:-mt-32 -mt-8")}>
        <Typography
          variant="h5"
          className="font-bold text-center mb-8"
          color="#2D3145"
        >
          <span style={{ color: "#5346DD" }}>elevo</span> cerca de tí
        </Typography>
        <div>
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
                className="bg-cover bg-no-repeat bg-center w-full flex items-end justify-center max-w-[200px] min-h-[200px] m-auto"
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
