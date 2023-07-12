"use client";

import { Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

const listDescription = [
  {
    id: 1,
    title: "Cabeza y cuello",
    description:
      "Se realiza con movimientos suaves y rítmicos, con el fin de relajar la musculatura de la zona, liberar tensiones y disminuir el estrés.",
    image: "/assets/images/home/masaje-relajante/cabeza_cuello.png",
    imageResponsive: "/assets/images/home/masaje-relajante/cabeza_cuello_responsive.png",
  },
  {
    id: 2,
    title: "Torso",
    description:
      "Se realiza con movimientos suaves y rítmicos, con el fin de relajar la musculatura de la zona, liberar tensiones y disminuir el estrés.",
    image: "/assets/images/home/masaje-relajante/torso.png",
    imageResponsive: "/assets/images/home/masaje-relajante/torso_responsive.png",
  },
  {
    id: 3,
    title: "Miembros superiores",
    description:
      "Se realiza con movimientos suaves y rítmicos, con el fin de relajar la musculatura de la zona, liberar tensiones y disminuir el estrés.",
    image: "/assets/images/home/masaje-relajante/miembros_superiores.png",
    imageResponsive: "/assets/images/home/masaje-relajante/miembros_superiores_responsive.png",
  },
  {
    id: 4,
    title: "Miembros inferiores",
    description:
      "Se realiza con movimientos suaves y rítmicos, con el fin de relajar la musculatura de la zona, liberar tensiones y disminuir el estrés.",
    image: "/assets/images/home/masaje-relajante/miembros_inferiores.png",
    imageResponsive: "/assets/images/home/masaje-relajante/miembros_inferiores_responsive.png",
  },
];

const Description = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div className="flex justify-center container sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full my-32">
      <div className="w-full">
        <Typography
          variant="h2"
          className="font-bold sm:text-center text-[32px] mb-4 leading-10 "
          style={{ color: "#5346DD" }}
        >
          <span style={{ color: "#2D3145" }}>¿Como es el</span> masaje
          relajante?
        </Typography>
        <Typography
          variant="h6"
          className="sm:text-center mb-24 text-lg leading-6 font-normal "
          color="#535978"
        >
          El masaje relajante se realiza en
          <span className="font-bold"> todo el cuerpo</span> con una intensidad
          que va de
          <span className="font-bold"> leve a moderada</span> progresivamente y
          en disposición
          <span className="font-bold"> céfalocaudal,</span> es decir que inicia
          en la cabeza y finaliza en los pies, para ello se dividirá el cuerpo
          en las siguientes 4 secciones a manipular
        </Typography>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
          {listDescription.map((item) => (
            <div key={item.id} className="flex sm:flex-row flex-col border-[1px] border-solid border-[#E0E5FC] rounded-2xl ">
              <div>
                <Image
                  src={matches ? item.image: item.imageResponsive}
                  alt={item.title}
                  style={{
                    height: matches ? "100%" : "",
                    width: matches ? "200px" : "100%",
                    borderRadius:matches ?  "16px 0px 0px 16px": "16px 16px 0px 0px",
                    objectFit: "cover",
                  }}
                  width={matches ? 200 : 400}
                  height={matches ? 200 : 400}
                  
                />
              </div>
              <div className="w-4/5 p-6">
                <Typography
                  variant="h5"
                  className="font-semibold text-lg text-[#3F34BB] mb-2 leading-6 "
                >
                  {item.title}
                </Typography>
                <Typography variant="h6" className=" text-[#2D3145] text-base ">
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

export default Description;
