"use client";
import CustomLinkButton from "@components/CustomLinkButton/CustomLinkButton";
import { Button, Typography, useMediaQuery } from "@mui/material";
import React, { use, useState } from "react";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import Link from "next/link";

const Share = () => {
  const [hover, setHover] = useState(false);
  const matches = useMediaQuery("(min-width:600px)");

  const handleHover = (prop) => () => {
    setHover(prop);
  };

  return (
    <div className="container sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full sm:mb-[200px] mb-[120px] ">
      <Typography
        variant="h5"
        className="font-bold text-center text-[32px] mb-4 leading-10 "
        color="#2D3145"
      >
        Comparte <span style={{ color: "#5346DD" }}>elevo</span>
      </Typography>
      <Typography
        variant="h6"
        className="text-center mb-16 text-lg leading-6 font-normal "
        color="#535978"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        Comparte momentos de bienestar con tus seres queridos. Regala
        experiencias maravillosas de masajes únicos a tu pareja, amigos o
        familiares con uno de nuestros servicios TOP.
      </Typography>
      <div
        className="mt-12 w-full flex flex-col sm:justify-center sm:items-start items-center justify-end p-10 rounded-xl sm:min-h-[288px] min-h-[480px]"
        style={{
          background:
          matches ?  "linear-gradient(90deg, rgba(83,70,221,0.8631827731092436) 18%, rgba(2,0,36,0.5018382352941176) 100%)": "linear-gradient(180deg, #2E2499 18%, #130D55 100%)", 
          filter: hover ? "blur(2px)" : "",
        }}
        onMouseEnter={handleHover(true)}
        onMouseLeave={handleHover(false)}
      >
        <Typography className="text-white sm:text-2xl text-lg font-bold mb-4 sm:w-1/2 w-full ">
          Parejas, familiares o amigos
        </Typography>
        <Typography className="text-white text-10 sm:w-1/2 w-full ">
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
