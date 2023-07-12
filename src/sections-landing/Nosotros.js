"use client";

import { Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const listReasons = [
  {
    title: "En tu hogar.",
    description:
      "Sí, vamos a tu domicilio. Llevamos todos los implementos necesarios (camilla, toallas, insumos) para que vivas una experiencia de bienestar inolvidable.",
    icon: <PhoneIphoneIcon className="text-[#5346DD] text-4xl" />,
  },
  {
    title: "Seguridad.",
    description:
      "Todos nuestros profesionales fisioterapeutas y maso-terapeutas han pasado por un proceso de verificación de antecedentes judiciales y referenciación profesional.",
    icon: <HelpOutlineIcon className="text-[#5346DD] text-4xl" />,
  },
  {
    title: "Tecnología.",
    description:
      "A través de nuestra plataforma de agendamiento de citas, podrás agendar, reprogramar o cancelar tus servicios. Podrás calificar nuestro servicio al finalizar, sólo con un clic.",
    icon: <HelpOutlineIcon className="text-[#5346DD] text-4xl" />,
  },
  {
    title: "Calidad.",
    description:
      "Nuestros profesionales se caracterizan por llevar el ADN del bienestar en cada servicio que prestan. Todos han sido capacitados y preparados por elevo-academia previamente.",
    icon: <HelpOutlineIcon className="text-[#5346DD] text-4xl" />,
  },
];

const Nosotros = () => {
  const [ancho, setAncho] = useState(0);
  const matches = useMediaQuery("(min-width:1440px)");

  useEffect(() => {
    setAncho(window.innerWidth);
  }, []);

  return (
    <div
      style={{
        backgroundImage: matches ? " url(/assets/images/home/nosotros.png)" :"linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 118.71%) ,url(/assets/images/home/nosotros.png)",
        backgroundSize: matches ? "60% 100%" : "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "left",
        height: matches ? `${(864 * (ancho * 0.6)) / 904}px` : "",
      }}
      className="w-full flex items-center"
    >
      <div className="container mx-auto grid grid-cols-2 w-full  sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full  ">
        <div className={matches ? "col-start-2" : "col-start-1 col-span-2"}>
          <Typography className="sm:text-4xl leading-10 text-[32px] xl:mt-0 mt-20 font-bold text-[#2D3145] mb-4 ">
            ¿Por qué en <span className="text-[#3F34BB]">elevo</span> somos{" "}
            <span className="text-[#3F34BB]">cracks?</span>
          </Typography>
          <Typography className="text-lg font-normal leading-6 text-[#535978] sm:mb-10 mb-[60px]">
            Todos los servicios de elevo son TOP. Pensamos en tu bienestar y el
            de tu familia. Llevamos literal bienestar a la puerta de tu hogar u
            oficina.
          </Typography>
          <div className="mb-32 " >
          {listReasons.map((item, index) => (
            <div
              key={index}
              className="my-8 flex items-center border-[1px] border-solid border-[#E0E5FC] rounded-2xl bg-white p-6 "
            >
              <Typography
              >{item.icon}</Typography>
              <div className="ml-4">
                <Typography className="text-sm leading-6 text-[#535978]">
                  <span className="text-[#3F34BB] font-semibold ">{item.title}</span>{" "}
                  {item.description}
                </Typography>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
