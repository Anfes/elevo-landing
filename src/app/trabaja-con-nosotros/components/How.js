"use client";
import { Typography } from "@mui/material";
import React from "react";

const How = () => {
  return (
    <div className="container sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full">
      <Typography className="font-semibold text-lg text-center text-[#398686] mb-4">
        ¿Cómo es trabajar con elevo?
      </Typography>
      <Typography className="font-medium text-4xl text-center text-[#2D3145] mb-12">
        Conoce nuestra <span className="font-bold"> metodología </span>de
        trabajo
      </Typography>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
        <div className="border-2 border-[#398686] rounded-2xl p-8 flex justify-center items-center">
          <Typography className="font font-semibold text-2xl text-center text-[#398686]">
            Te contratamos por prestación de servicios.
          </Typography>
        </div>
        <div className="border-2 border-[#398686] rounded-2xl p-8 flex justify-center items-center">
          <Typography className="font font-semibold text-2xl text-center text-[#398686]">
            Te pagamos por cada sesión realizada.
          </Typography>
        </div>
        <div className="border-2 border-[#398686] rounded-2xl p-8 flex justify-center items-center">
          <Typography className="font font-semibold text-2xl text-center text-[#398686]">
            Recibirás capacitación y dotación inicial.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default How;
