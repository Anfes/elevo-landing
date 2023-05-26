"use client";
import CustomLinkButton from "@components/CustomLinkButton/CustomLinkButton";
import { Typography } from "@mui/material";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";

const Profesionals = () => {
  return (
    <div className="container mx-auto xl:px-36 lg:px-36 px-0 grid grid-cols-2">
      <div className="flex flex-col justify-center">
        <Typography variant="h2" className="font-bold text-4xl text-[#2D3145] ">
          Los mejores profesionales{" "}
          <span className="text-[#3F34BB]">a tu disposición</span>{" "}
        </Typography>
        <Typography variant="body1" className="text-[#535978] mt-4 text-left">
          Nuestros profesionales fisioterapeutas y masoterapeutas son totalmente
          calificados, capacitados y con varios años de experiencia verificada.
          Con elevo, tu bienestar está en buenas manos.
        </Typography>
        <div className="mt-12" >
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
      <div className="flex justify-center items-center">
        <img src="/assets/images/home/profesionals.png" alt="profesionals" />
      </div>
    </div>
  );
};

export default Profesionals;
