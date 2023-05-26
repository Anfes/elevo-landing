"use client";

import { Typography } from "@mui/material";
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

  useEffect(() => {
    setAncho(window.innerWidth);
  }, []);

  return (
    <div
      style={{
        backgroundImage: " url(/assets/images/home/nosotros.png)",
        backgroundSize: "60% 100%",
        backgroundRepeat: "no-repeat",
        height: `${(864 * (ancho * 0.6)) / 904}px`,
      }}
      className="w-full flex items-center mb-20"
    >
      <div className="container mx-auto xl:px-36 lg:px-36 px-0 grid grid-cols-2 w-full">
        <div className="col-start-2">
          <Typography className="text-4xl font-bold text-[#2D3145] mb-4 ">
            ¿Por qué en <span className="text-[#3F34BB]">elevo</span> somos{" "}
            <span className="text-[#3F34BB]">cracks?</span>
          </Typography>
          <Typography className="text-11 text-[#535978] mt-4">
            Todos los servicios de elevo son TOP. Pensamos en tu bienestar y el
            de tu familia. Llevamos literal bienestar a la puerta de tu hogar u
            oficina.
          </Typography>
          {listReasons.map((item, index) => (
            <div
              key={index}
              className="my-6 flex items-center border-[1px] border-solid border-[#E0E5FC] rounded-2xl bg-white p-6 "
            >
              <div>{item.icon}</div>
              <div className="ml-4">
                <Typography className="text-10 text-[#535978]">
                  <span className="text-[#3F34BB]">{item.title}</span>{" "}
                  {item.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
