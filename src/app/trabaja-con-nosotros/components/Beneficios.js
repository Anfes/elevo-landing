"use client";
import React from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Typography } from "@mui/material";

const beneficiosList = [
  {
    title: "Te contratamos por prestación de servicios.",
    icon: <PhoneIphoneIcon className="text-[#5DC1C0] text-3xl " />,
    description: "Te contratamos por prestación de servicios.",
  },
  {
    title: "Te pagamos por cada sesión realizada.",
    icon: <PhoneIphoneIcon className="text-[#5DC1C0] text-3xl " />,
    description: "Te pagamos por cada sesión realizada.",
  },
  {
    title: "Recibirás capacitación y dotación inicial.",
    icon: <PhoneIphoneIcon className="text-[#5DC1C0] text-3xl " />,
    description: "Recibirás capacitación y dotación inicial.",
  },
  {
    title: "Recibirás capacitación y dotación inicial.",
    icon: <PhoneIphoneIcon className="text-[#5DC1C0] text-3xl " />,
    description: "Recibirás capacitación y dotación inicial.",
  },
  {
    title: "Recibirás capacitación y dotación inicial.",
    icon: <PhoneIphoneIcon className="text-[#5DC1C0] text-3xl " />,
    description: "Recibirás capacitación y dotación inicial.",
  },
  {
    title: "Recibirás capacitación y dotación inicial.",
    icon: <PhoneIphoneIcon className="text-[#5DC1C0] text-3xl " />,
    description: "Recibirás capacitación y dotación inicial.",
  },
];

const Beneficios = () => {
  return (
    <div className="container sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full py-32">
      <Typography className="font-medium text-lg text-center mb-4">
        Beneficios de ser parte de nuestra comunidad
      </Typography>
      <Typography className="font-semibold text-4xl text-center text-[#2D3145] mb-12">
        Conoce nuestra metodología de trabajo Encuentra un{" "}
        <span className="font-bold text-[#3F34BB]"> equilibrio </span>
        entre tu vida personal y laboral.
      </Typography>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
        {beneficiosList.map((beneficio, index) => (
          <div className="border-2 border-[#C5CDF7] rounded-2xl p-4">
            <div className="mb-4">{beneficio.icon}</div>
            <Typography className="font font-semibold mb-4 text-[#3F34BB]">
              {beneficio.title}
            </Typography>
            <div>
              <Typography>{beneficio.description}</Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beneficios;
