"use client";
import CustomLinkButton from "@components/CustomLinkButton/CustomLinkButton";
import { Typography, useMediaQuery } from "@mui/material";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import Image from "next/image";

const Profesionals = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div className="container mx-auto grid grid-cols-2 gap-20 sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full mb-32">
      <div className="flex flex-col justify-center sm:col-span-1 col-span-2 ">
        {}
        <Typography
          variant="h2"
          className="sm:mb-6 mb-10 font-bold sm:text-[32px] text-2xl text-[#2D3145] leading-8 sm:leading-10 sm:text-left text-center "
        >
          Los mejores profesionales{" "}
          <span className="text-[#3F34BB]">a tu disposición</span>{" "}
        </Typography>
        {!matches && (
          <div className="flex justify-center items-center col-span-2">
            <Image
              src="/assets/images/home/profesionals.png"
              alt="profesionals"
              width={500}
              height={500}
            />
          </div>
        )}
        <Typography
          variant="body1"
          className="text-[#535978] sm:text-left text-center sm:text-xl text-base font-normal sm:leading-8 leading-6 mb-6 sm:mt-0 mt-10 "
        >
          Nuestros profesionales fisioterapeutas y masoterapeutas son totalmente
          calificados, capacitados y con varios años de experiencia verificada.
          Con elevo, tu bienestar está en buenas manos.
        </Typography>
        <div className="w-full sm:justify-start justify-center flex">
          <CustomLinkButton
            className="primary"
            href="/reserva-cita"
            label="Reserva ahora"
            icon={
              <TodayRoundedIcon style={{ color: "white" }} className="ml-1" />
            }
          />
        </div>
      </div>
      {matches && (
        <div className="flex justify-center items-center">
          <Image
            src="/assets/images/home/profesionals.png"
            alt="profesionals"
            width={500}
            height={500}
          />
        </div>
      )}
    </div>
  );
};

export default Profesionals;
