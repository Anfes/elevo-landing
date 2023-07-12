"use client";
import CustomLinkButton from "@components/CustomLinkButton/CustomLinkButton";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="container sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full grid md:grid-cols-5 grid-cols-1 gap-12 my-32">
      <div className="flex items-center justify-center md:col-span-2 col-span-5 ">
        <Image
          src="/assets/images/home/trabaja-con-nosotros/nurse-home.png"
          alt="nurse-home"
          className="w-96"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col justify-center md:col-span-3 col-span-5  ">
        <Typography
          variant="h1"
          className="sm:font-semibold font-bold sm:leading-[72px] leading-10 sm:text-6xl text-[32px] md:leading-[4.5rem] mb-6	"
          color="#2D3145"
        >
          ¡Bienvenido a <span style={{ color: "#5DC1C0" }}> elevo!</span>
        </Typography>
        <Typography
          variant="h6"
          className="sm:text-xl text-base sm:leading-8 leading-6  sm:font-medium font-normal sm:mb-6 mb-8 "
          color="#2D3145"
        >
          La plataforma de masajes relajantes y terapéuticos que{" "}
          <span className="font-bold"> conecta profesionales idóneos </span>con
          las necesidades de los pacientes para contribuir con su salud y
          bienestar.
          <br />
          <br />
          <span className="font-bold">
            ¡Haz parte de nuestra comunidad de profesionales!
          </span>
        </Typography>
        <div className="flex sm:flex-row flex-col">
          <div className="sm:mr-4 w-full ">
            <CustomLinkButton
              href="/trabaja-con-nosotros"
              className="outlinedSecondary"
              label="Requisitos fisioterapeuta"
              width="100%"
            />
          </div>
          <div className="sm:ml-4 sm:mt-0 my-6 w-full ">
            <CustomLinkButton
              href="/trabaja-con-nosotros"
              className="outlinedPrimary"
              label="Requisitos masoterapeuta"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
