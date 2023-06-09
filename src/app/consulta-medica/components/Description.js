"use client";

import { Typography } from "@mui/material";

const listDescription = [
  {
    id: 1,
    title: "Cabeza y cuello",
    description:
      "Se realiza con movimientos suaves y rítmicos, con el fin de relajar la musculatura de la zona, liberar tensiones y disminuir el estrés.",
    image: "/assets/images/home/masaje-relajante/cabeza_cuello.png",
  },
  {
    id: 2,
    title: "Torso",
    description:
      "Se realiza con movimientos suaves y rítmicos, con el fin de relajar la musculatura de la zona, liberar tensiones y disminuir el estrés.",
    image: "/assets/images/home/masaje-relajante/torso.png",
  },
  {
    id: 3,
    title: "Miembros superiores",
    description:
      "Se realiza con movimientos suaves y rítmicos, con el fin de relajar la musculatura de la zona, liberar tensiones y disminuir el estrés.",
    image: "/assets/images/home/masaje-relajante/miembros_superiores.png",
  },
  {
    id: 4,
    title: "Miembros inferiores",
    description:
      "Se realiza con movimientos suaves y rítmicos, con el fin de relajar la musculatura de la zona, liberar tensiones y disminuir el estrés.",
    image: "/assets/images/home/masaje-relajante/miembros_inferiores.png",
  },
];

const Description = () => {
  return (
    <div className="flex justify-center container mx-auto xl:px-36 lg:px-36 px-0 my-32">
      <div className="w-full">
        <Typography
          variant="h2"
          className="font-bold text-4xl text-center text-[#3F34BB] mb-8 "
        >
          <span style={{ color: "#2D3145" }}>¿Como es el</span> Consulta médica?
        </Typography>
        <Typography
          variant="h6"
          className="text-center text-[#535978] mb-12 px-32 "
        >
          El masaje relajante se realiza en
          <span className="font-bold">todo el cuerpo</span> con una intensidad
          que va de
          <span className="font-bold">leve a moderada</span> progresivamente y
          en disposición
          <span className="font-bold">céfalocaudal,</span> es decir que inicia
          en la cabeza y finaliza en los pies, para ello se dividirá el cuerpo
          en las siguientes 4 secciones a manipular
        </Typography>
        <div className="grid grid-cols-2 gap-12">
          {listDescription.map((item) => (
            <div className="flex border-[1px] border-solid border-[#E0E5FC] rounded-2xl ">
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  height={null}
                  width={200}
                />
              </div>
              <div className="w-4/5 p-4">
                <Typography
                  variant="h5"
                  className="font-semibold text-[#3F34BB] mb-4 "
                >
                  {item.title}
                </Typography>
                <Typography variant="h6" className=" text-[#535978]">
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
