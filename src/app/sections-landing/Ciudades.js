"use client";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  box: {
    boxShadow: "0px 4px 40px rgba(45, 49, 69, 0.1)",
    borderRadius: 16,
    marginTop: "-8rem",
  },
}));

const cityList = [
  {
    name: "Bogotá",
    image: "/assets/images/home/ciudades/bogota.png",
  },
  {
    name: "Medellín",
    image: "/assets/images/home/ciudades/medellin.png",
  },
  {
    name: "Cali",
    image: "/assets/images/home/ciudades/cali.png",
  },
  {
    name: "Barranquilla",
    image: "/assets/images/home/ciudades/barranquilla.png",
  },
];

const Ciudades = () => {
  const classes = useStyles();
  return (
    <div className="container mx-auto">
      <div className={clsx(classes.box, "w-full px-24 py-16 bg-white mb-16")}>
        <Typography
          variant="h5"
          className="font-bold text-center mb-8"
          color="#2D3145"
        >
          <span style={{ color: "#5346DD" }}>Elevo</span> cerca de tí
        </Typography>
        <div className="grid grid-cols-4">
          {cityList.map((city, index) => (
            <div key={index} className="flex justify-center">
              <div
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%), url(${city.image})`,
                  backgroundBlendMode: "normal-luminosity",
                  borderRadius: 16,
                }}
                className="bg-cover bg-no-repeat bg-center w-full flex items-end justify-center max-w-[220px] min-h-[220px]"
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
