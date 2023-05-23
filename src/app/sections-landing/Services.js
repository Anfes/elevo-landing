"use client";

import { Typography } from "@mui/material";

const servicesList = [
  {
    name: "Masaje fusión",
    description:
      "Técnicas manuales, suaves y rítmicas que generan bienestar corporal. Aplicación de aceites esenciales.",
    image: "/assets/images/home/servicios/servicio1.png",
    premium: false,
  },
  {
    name: "Masaje Deep Tisue",
    description:
      "Masaje de alta intesidad que trata afecciones musculares cómo espasmos, tensión profunda ó sensación de rigidez.",
    image: "/assets/images/home/servicios/servicio2.png",
    premium: false,
  },
  {
    name: "Terapia deportiva",
    description:
      "Técnicas manuales, suaves y rítmicas que generan bienestar corporal. Aplicación de aceites esenciales.",
    image: "/assets/images/home/servicios/servicio3.png",
    premium: false,
  },
  {
    name: "Quiromasaje",
    description:
      "Manipulación vertebral de columna cervical, dorsal, kumbar y articulaciones periféricas. Acompañado de masaje relajante localizado.",
    image: "/assets/images/home/servicios/servicio4.png",
    premium: false,
  },
  {
    name: "Terapia elevo",
    description:
      "Técnicas manuales, suaves y rítmicas que generan bienestar corporal. Aplicación de aceites esenciales.",
    image: "/assets/images/home/servicios/servicio5.png",
    premium: false,
  },
  {
    name: "Terapia Premium",
    description:
      "Terapias premium con los especialistas GOLD de nuestra platafoma. Incluyen varios servicios adicionales.",
    image: "/assets/images/home/servicios/servicio6.png",
    premium: true,
  },
];

const Services = () => {
  return (
    <div className="container mx-auto">
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
          <div className="flex justify-center">
            <div
              className="flex flex-col justify-end p-4 bg-cover bg-no-repeat bg-center max-w-[380px] min-h-[380px]"
              style={{
                backgroundImage: `url(${service.image})`,
                borderRadius: 24,
              }}
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
        ))}
      </div>
    </div>
  );
};

export default Services;
