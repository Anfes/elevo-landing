"use client";
import CustomLinkButton from "@components/CustomLinkButton/CustomLinkButton";
import { Typography, useMediaQuery } from "@mui/material";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";

const Profesionals = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div className="container mx-auto grid grid-cols-2 gap-4 sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full mb-32">
      {
        !matches && (
          <div className="flex justify-center items-center col-span-2">
            <img src="/assets/images/home/profesionals-responsive.png" alt="profesionals" />
          </div>
        )
      }
      <div className="flex flex-col justify-center sm:col-span-1 col-span-2 ">
        <Typography variant="h2" className="font-bold text-4xl text-[#2D3145] ">
          Los mejores profesionales{" "}
          <span className="text-[#3F34BB]">a tu disposición</span>{" "}
        </Typography>
        <Typography variant="body1" className="text-[#535978] mt-4 text-left">
          Nuestros profesionales fisioterapeutas y masoterapeutas son totalmente
          calificados, capacitados y con varios años de experiencia verificada.
          Con elevo, tu bienestar está en buenas manos.
        </Typography>
        <div className="mt-12 w-full sm:justify-start justify-center flex">
          <CustomLinkButton
            className="primary"
            href="/reserva-cita"
            label="Reserva ahora"
            icon={
              <TodayRoundedIcon style={{ color: "white" }} className="ml-6" />
            }
          />
        </div>
      </div>
      {matches && (
        <div className="flex justify-center items-center">
          <img src="/assets/images/home/profesionals.png" alt="profesionals" />
        </div>
      )}
    </div>
  );
};

export default Profesionals;
