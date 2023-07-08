"use client";
import { Button, Typography } from "@mui/material";
import React from "react";

const AplicateMas = () => {
  return (
    <div className="bg-[#3F34BB] ">
      <div className="container sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full mb-32">
        <div className="flex sm:flex-row flex-col items-center  py-16">
          <Typography className="text-3xl text-white font-bold text-center ">
            ¡Cumplo con los requisitos!
          </Typography>
          <Button className="bg-[#72DEDD] text-[#3F34BB] rounded-lg px-8 py-2 sm:ml-4 sm:mt-0 mt-8 sm:w-auto w-full">
            Soy Masiterapeuta
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AplicateMas;
