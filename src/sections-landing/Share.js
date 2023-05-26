"use client";
import CustomLinkButton from "@components/CustomLinkButton/CustomLinkButton";
import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import Link from "next/link";

const Share = () => {
  const [hover, setHover] = useState(false);

  const handleHover = (prop) => () => {
    setHover(prop);
  };

  return (
    <div className="container mx-auto xl:px-36 lg:px-36 px-0 mb-20">
      <Typography
        variant="h5"
        className="font-bold text-center text-3x1 mb-4"
        color="#2D3145"
      >
        Comparte <span style={{ color: "#5346DD" }}>Elevo</span>
      </Typography>
      <Typography
        variant="h6"
        className="text-center mb-16 text-base "
        color="#535978"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        Comparte momentos de bienestar con tus seres queridos. Regala
        experiencias maravillosas de masajes únicos a tu pareja, amigos o
        familiares con uno de nuestros servicios TOP.
      </Typography>
      <div
        className="mt-12 w-full flex flex-col justify-center px-8 py-16 rounded-xl h-72"
        style={{
          background:
            "linear-gradient(90deg, rgba(83,70,221,0.8631827731092436) 18%, rgba(2,0,36,0.5018382352941176) 100%)",
          filter: hover ? "blur(2px)" : "",
        }}
        onMouseEnter={handleHover(true)}
        onMouseLeave={handleHover(false)}
      >
        <Typography className="text-white text-lg font-bold mb-4 w-1/2">
          Parejas, familiares o amigos
        </Typography>
        <Typography className="text-white text-10 w-1/2">
          Lorem ipsum dolor sit amet consectetur. Faucibus eget facilisis
          nascetur cras vitae bibendum commodo. Tellus ut consequat ipsum elit
          at. Lorem diam lectus massa ut at in.
        </Typography>
      </div>
      {hover && (
        <div
          className="w-full h-72 flex flex-col justify-center items-center z-10 -mt-[289px] "
          onMouseEnter={handleHover(true)}
          onMouseLeave={handleHover(false)}
        >
          <div className="z-10">
            <Link href="/comparte-elevo">
              <Button
                className="bg-[#5346DD] text-white font-bold  px-8 py-4 rounded-xl"
                style={{ fontSize: 12 }}
              >
                Ver detalle
              </Button>
            </Link>
          </div>
          <div className=" z-10" style={{ marginTop: 30 }}>
            <CustomLinkButton
              className="outlinedWhite"
              label="Reservar Servicio"
              href="/reserva-cita"
              icon={
                <TodayRoundedIcon style={{ color: "white" }} className="ml-6" />
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Share;
