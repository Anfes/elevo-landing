"use client";
import { Button, Typography } from "@mui/material";
import React from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const fisioterapReqList = [
  {
    title: "Tener un título profesional de fisioterapia",
    description:
      "Lorem ipsum dolor sit amet consectetur. Neque tempor consequat dapibus ipsum ipsum. Et sed est neque sit et ut eget viverra eget. Ipsum urna massa facilisis scelerisque. Cursus sit.",
    icon: <PhoneIphoneIcon className="text-[#5DC1C0] text-6xl mr-4" />,
  },
  {
    title: "Tener un título profesional de fisioterapia",
    description:
      "Lorem ipsum dolor sit amet consectetur. Neque tempor consequat dapibus ipsum ipsum. Et sed est neque sit et ut eget viverra eget. Ipsum urna massa facilisis scelerisque. Cursus sit.",
    icon: <PhoneIphoneIcon className="text-[#5DC1C0] text-6xl mr-4" />,
  },
  {
    title: "Tener un título profesional de fisioterapia",
    description:
      "Lorem ipsum dolor sit amet consectetur. Neque tempor consequat dapibus ipsum ipsum. Et sed est neque sit et ut eget viverra eget. Ipsum urna massa facilisis scelerisque. Cursus sit.",
    icon: <PhoneIphoneIcon className="text-[#5DC1C0] text-6xl mr-4" />,
  },
  {
    title: "Tener un título profesional de fisioterapia",
    description:
      "Lorem ipsum dolor sit amet consectetur. Neque tempor consequat dapibus ipsum ipsum. Et sed est neque sit et ut eget viverra eget. Ipsum urna massa facilisis scelerisque. Cursus sit.",
    icon: <PhoneIphoneIcon className="text-[#5DC1C0] text-6xl mr-4" />,
  },
];

const FisioterapReq = () => {
  return (
    <div className="container sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full py-32">
      <Typography className="text-4xl text-[#2D3145] font-bold mb-4">
        Requisitos para <span className="text-[#5DC1C0]"> fisioterapeutas</span>
      </Typography>
      <Typography className="text-lg text-[#2D3145] mb-8">
        Lorem ipsum dolor sit amet consectetur. Volutpat nibh amet urna
        fermentum. Iaculis id justo facilisis etiam neque magna proin.
      </Typography>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
        {fisioterapReqList.map((item, index) => (
          <div className="border-2 border-[#E0E5FC] rounded-2xl p-8 flex justify-center items-center">
            <div className="flex justify-center items-center">{item.icon}</div>
            <Typography className="text-lg text-center">
              {item.description}
            </Typography>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FisioterapReq;
