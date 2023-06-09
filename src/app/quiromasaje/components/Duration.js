"use client";

import CustomLinkButton from "@components/CustomLinkButton/CustomLinkButton";
import { Divider, Typography } from "@mui/material";

const listDuration = [
  {
    id: 1,
    time: "45",
    unit: "min",
    description:
      "Distribuidos en aproximadamente 11 minutos por cada zona de tu cuerpo.",
  },
  {
    id: 2,
    time: "60",
    unit: "min",
    description:
      "Distribuidos en aproximadamente 15 minutos por cada zona de tu cuerpo.",
  },
  {
    id: 3,
    time: "90",
    unit: "min",
    description:
      "Distribuidos en aproximadamente 22 minutos por cada zona de tu cuerpo.",
  },
];

const Duration = () => {
  return (
    <div
      className="w-full  py-16 mb-32"
      style={{
        background:
          "linear-gradient(0deg, rgba(240,238,255,1) 50%, rgba(240,238,255,1) 50%, rgba(255,255,255,1) 50%)",
      }}
    >
      <div className="grid grid-cols-3 gap-16 container mx-auto xl:px-36 lg:px-36 px-0 my-12">
        {listDuration.map((item) => (
          <div
            className="rounded-3xl p-8 bg-white"
            style={{
              boxShadow: "0px 0px 16px rgba(45, 49, 69, 0.1)",
            }}
          >
            <Typography className="text-[#949CC4] mb-8 ">
              Duración de la sesión
            </Typography>
            <div className="flex justify-center items-end mb-8">
              <Typography
                variant="h1"
                className="font-bold text-7xl text-center text-[#2D3145] mr-2 "
              >
                {item.time}
              </Typography>
              <Typography
                variant="h6"
                className="text-center text-[#2D3145] text-base "
              >
                {item.unit}
              </Typography>
            </div>
            <Typography className="text-[#2D3145] text-center text-base mb-8 ">
              {item.description}
            </Typography>
            <Divider className="mb-8" />
            <div className="flex justify-center items-center">
              <CustomLinkButton
                className="primary"
                label="¡Quiero reservar!"
                href="/reserva-cita"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Duration;