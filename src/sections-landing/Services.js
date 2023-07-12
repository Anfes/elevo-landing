"use client";

import CustomLinkButton from "@components/CustomLinkButton/CustomLinkButton";
import { Button, Typography, useMediaQuery } from "@mui/material";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";

const responsive = {
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
};

const servicesList = [
  {
    id: "btn_detalle_masaje_relajante",
    name: "Masaje Relajante",
    description:
      "Técnicas manuales, suaves y rítmicas que generan bienestar corporal. Aplicación de aceites esenciales.",
    image: "/assets/images/home/servicios/servicio1.png",
    premium: false,
    link: "/masaje-relajante",
  },
  {
    id: "btn_detalle_masaje_terapeutico",
    name: "Masaje Terapéutico",
    description:
      "Masaje de alta intesidad que trata afecciones musculares cómo espasmos, tensión profunda ó sensación de rigidez.",
    image: "/assets/images/home/servicios/servicio2.png",
    premium: false,
    link: "/masaje-terapeutico",
  },
  {
    id: "btn_detalle_terapia_deportiva",
    name: "Terapia Deportiva",
    description:
      "Técnicas manuales, suaves y rítmicas que generan bienestar corporal. Aplicación de aceites esenciales.",
    image: "/assets/images/home/servicios/servicio3.png",
    premium: false,
    link: "/terapia-deportiva",
  },
  {
    id: "btn_detalle_quiromasaje",
    name: "Quiromasaje",
    description:
      "Manipulación vertebral de columna cervical, dorsal, kumbar y articulaciones periféricas. Acompañado de masaje relajante localizado.",
    image: "/assets/images/home/servicios/servicio4.png",
    premium: false,
    link: "/quiromasaje",
  },
  {
    id: "btn_detalle_quiroterapia",
    name: "Quiroterapia",
    description:
      "Técnicas manuales, suaves y rítmicas que generan bienestar corporal. Aplicación de aceites esenciales.",
    image: "/assets/images/home/servicios/servicio5.png",
    premium: false,
    link: "/quiroterapia",
  },
  {
    id: "btn_detalle_consulta_medica",
    name: "Consulta Médica",
    description:
      "Terapias premium con los especialistas GOLD de nuestra platafoma. Incluyen varios servicios adicionales.",
    image: "/assets/images/home/servicios/servicio6.png",
    premium: true,
    link: "/consulta-medica",
  },
];

const Services = () => {
  const matches = useMediaQuery("(min-width:960px)");
  const [hover, setHover] = useState(null);

  const handleMouse = (prop) => (event) => {
    setHover(prop);
  };

  return (
    <div className="container sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full">
      <Typography
        variant="h5"
        className="font-bold text-center sm:text-[32px] text-2xl sm:leading-10 leading-8 mb-4"
        color="#2D3145"
      >
        Nuestros <span style={{ color: "#5346DD" }}>Servicios</span>
      </Typography>
      <Typography
        variant="h6"
        className="text-center sm:mb-20 mb-16 sm:text-lg text-base font-normal leading-6 "
        color="#535978"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        Disfruta de un masajes personalizados y revitalizantes. Descubre todos
        nuestros servicios únicos para cuidar de tu cuerpo y mente.
      </Typography>
      {matches && (
        <div className="grid grid-cols-3 gap-20 mt-16 mb-72">
          {servicesList.map((service, index) => (
            <div key={service.id}>
              <div
                className="flex justify-center"
                style={hover === index ? { filter: "blur(2px)" } : {}}
              >
                <div
                  className="flex flex-col justify-end p-6 bg-cover bg-no-repeat bg-center max-w-[320px] min-h-[400px]"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    borderRadius: 24,
                  }}
                  onMouseEnter={handleMouse(index)}
                  onMouseLeave={handleMouse(null)}
                >
                  <div className="flex items-center mb-2 gap-2">
                    <Typography
                      variant="h5"
                      className="font-bold text-xl leading-8"
                      color="#fff"
                    >
                      {service.name}
                    </Typography>
                    {service.premium && (
                      <div className="bg-[#FE51B9] p-1 flex justify-center items-center rounded-md ">
                        <Typography color="#fff" className="text-xs font-bold ">
                          Premium
                        </Typography>
                      </div>
                    )}
                  </div>
                  <Typography
                    variant="h6"
                    className="text-sm leading-6 font-medium "
                    color="#fff"
                  >
                    {service.description}
                  </Typography>
                </div>
              </div>
              {hover === index && (
                <div className="flex justify-center -mt-[381px] ">
                  <div
                    className="flex flex-col justify-center items-center  max-w-[320px] min-h-[380px]"
                    style={{
                      borderRadius: 24,
                    }}
                    onMouseEnter={handleMouse(index)}
                    onMouseLeave={handleMouse(null)}
                  >
                    <div className="z-10">
                      <Link href={service.link}>
                        <Button
                          id={service.id}
                          className="bg-[#5346DD] text-white font-bold  px-8 py-4 rounded-xl"
                          style={{ fontSize: 12 }}
                        >
                          Ver detalle
                        </Button>
                      </Link>
                    </div>
                    <div className=" z-10" style={{ marginTop: 30 }}>
                      <CustomLinkButton
                        className="outlinedWhite"
                        label="Reservar Servicio"
                        href="/reserva-cita"
                        icon={
                          <TodayRoundedIcon
                            style={{ color: "white" }}
                            className="ml-6"
                          />
                        }
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {!matches && (
        <div className="mt-16 mb-36">
          <Slider
            infinite
            rows
            dots
            autoplaySpeed={6000}
            autoplay
            arrows={false}
            swipe
            swipeToSlide
            slidesToShow={
              servicesList?.length === 1
                ? 1
                : servicesList?.length === 2
                ? 2
                : servicesList?.length === 3
                ? 3
                : 4
            }
            {...responsive}
          >
            {servicesList?.length &&
              servicesList.map((service, index) => {
                return (
                  <div className="px-1" key={service.id}>
                    <div
                      className="flex justify-center"
                      style={hover === index ? { filter: "blur(2px)" } : {}}
                    >
                      <div
                        className="flex flex-col justify-end p-4 bg-cover bg-no-repeat bg-center sm:max-w-[320px] max-w-[380px] min-h-[400px]"
                        style={{
                          backgroundImage: `url(${service.image})`,
                          borderRadius: 24,
                        }}
                        onMouseEnter={handleMouse(index)}
                        onMouseLeave={handleMouse(null)}
                      >
                        <div className="flex items-center mb-2 gap-2">
                          <Typography
                            variant="h5"
                            className="font-bold text-lg"
                            color="#fff"
                          >
                            {service.name}
                          </Typography>
                          {service.premium && (
                            <div className="bg-[#FE51B9] p-1 flex justify-center items-center rounded-md ">
                              <Typography
                                color="#fff"
                                className="text-xs font-bold "
                              >
                                Premium
                              </Typography>
                            </div>
                          )}
                        </div>
                        <Typography
                          variant="h6"
                          className="text-sm leading-[1.5rem]"
                          color="#fff"
                        >
                          {service.description}
                        </Typography>
                      </div>
                    </div>
                    {hover === index && (
                      <div className="flex justify-center -mt-[381px] ">
                        <div
                          className="flex flex-col justify-center items-center p-4 sm:max-w-[320px] max-w-[380px] min-h-[400px]"
                          style={{
                            borderRadius: 24,
                          }}
                          onMouseEnter={handleMouse(index)}
                          onMouseLeave={handleMouse(null)}
                        >
                          <div className="z-10">
                            <Link href={service.link}>
                              <Button
                                id={service.id}
                                className="bg-[#5346DD] text-white font-bold  px-8 py-4 rounded-xl"
                                style={{ fontSize: 12 }}
                              >
                                Ver detalle
                              </Button>
                            </Link>
                          </div>
                          <div className=" z-10" style={{ marginTop: 30 }}>
                            <Link href="/reserva-cita">
                              <CustomLinkButton
                                className="outlinedWhite"
                                label="Reservar Servicio"
                                icon={
                                  <TodayRoundedIcon
                                    style={{ color: "white" }}
                                    className="ml-2"
                                  />
                                }
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Services;
