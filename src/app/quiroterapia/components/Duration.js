"use client";

import CustomLinkButton from "@components/CustomLinkButton/CustomLinkButton";
import { Divider, Typography } from "@mui/material";
import Slider from "react-slick";

const responsive = {
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        dots: true,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
};

const listDuration = [
  {
    id: 1,
    time: "45",
    unit: "min",
    description:
      "Distribuidos en aproximadamente 11 minutos por cada zona de tu cuerpo.",
      recomendado: false
  },
  {
    id: 2,
    time: "60",
    unit: "min",
    description:
      "Distribuidos en aproximadamente 15 minutos por cada zona de tu cuerpo.",
      recomendado: true
  },
  {
    id: 3,
    time: "90",
    unit: "min",
    description:
      "Distribuidos en aproximadamente 22 minutos por cada zona de tu cuerpo.",
      recomendado: false
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
      <div className="container sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full my-12">
        <Slider
          infinite
          rows
          dots
          autoplaySpeed={6000}
          autoplay
          arrows={false}
          swipe
          swipeToSlide
          slidesToShow={3}
          {...responsive}
        >
          {listDuration.map((item) => (
           <div key={item.id}>
              <div className="flex justify-center items-center">
                <div
                  className="rounded-3xl bg-white max-w-[320px] "
                  style={{
                    boxShadow: "0px 0px 16px rgba(45, 49, 69, 0.1)",
                  }}
                >
                  <div className="px-8 pt-8 pb-6">
                    <div className="mb-6 flex justify-between">
                      <Typography className="text-[#949CC4]">
                        Duración de la sesión
                      </Typography>
                      {item.recomendado && (
                        <div className="bg-[#FE51B9] p-1 rounded-md w-fit ">
                          <Typography className="text-xs font-semibold text-white">
                            Recomendado
                          </Typography>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-center items-end mb-6">
                      <Typography
                        variant="h1"
                        className="font-extrabold text-6xl text-center text-[#2D3145] mr-2 "
                      >
                        {item.time}
                      </Typography>
                      <Typography
                        variant="h6"
                        className="text-center text-[#2D3145] text-sm "
                      >
                        {item.unit}
                      </Typography>
                    </div>
                    <Typography className="text-[#2D3145] text-center text-sm">
                      {item.description}
                    </Typography>
                  </div>
                  <Divider />
                  <div className="flex justify-center items-center pt-6 pb-8">
                    <CustomLinkButton
                      className="primary"
                      label="¡Quiero reservar!"
                      href="/reserva-cita"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Duration;
