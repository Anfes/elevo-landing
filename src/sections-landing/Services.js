"use client";

import CustomLinkButton from "@components/CustomLinkButton/CustomLinkButton";
import { Button, Typography } from "@mui/material";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import { useState } from "react";
import Link from "next/link";

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
  const [hover, setHover] = useState(null);

  const handleMouse = (prop) => (event) => {
    setHover(prop);
  };
  console.log("hover", hover);
  return (
    <div className="container mx-auto xl:px-36 lg:px-36 px-0">
      <Typography
        variant="h5"
        className="font-bold text-center text-3x1 mb-4"
        color="#2D3145"
      >
        Nuestros <span style={{ color: "#5346DD" }}>Servicios</span>
      </Typography>
      <Typography
        variant="h6"
        className="text-center mb-16 text-base "
        color="#535978"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        Disfruta de un masajes personalizados y revitalizantes. Descubre todos
        nuestros servicios únicos para cuidar de tu cuerpo y mente.
      </Typography>
      <div className="grid grid-cols-3 gap-8 mt-16 mb-24">
        {servicesList.map((service, index) => (
          <div>
            <div
              className="flex justify-center"
              style={hover === index ? { filter: "blur(2px)" } : {}}
            >
              <div
                className="flex flex-col justify-end p-4 bg-cover bg-no-repeat bg-center max-w-[380px] min-h-[380px]"
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
                      <Typography color="#fff" className="text-xs font-bold ">
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
                  className="flex flex-col justify-center items-center p-4 max-w-[380px] min-h-[380px]"
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
    </div>
  );
};

export default Services;