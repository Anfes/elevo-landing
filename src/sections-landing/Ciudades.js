"use client";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  box: {
    boxShadow: "0px 4px 40px rgba(45, 49, 69, 0.1)",
    borderRadius: 16,
    marginTop: "-8rem",
  },
}));

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

  console.log("first", hover);

  return (
    <div className="container mx-auto xl:px-36 lg:px-36 px-0">
      <div className={clsx(classes.box, "w-full px-24 py-16 bg-white mb-16")}>
        <Typography
          variant="h5"
          className="font-bold text-center mb-8"
          color="#2D3145"
        >
          <span style={{ color: "#5346DD" }}>Elevo</span> cerca de tí
        </Typography>
        <div className="grid grid-cols-3">
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
        </div>
      </div>
    </div>
  );
};

export default Ciudades;
