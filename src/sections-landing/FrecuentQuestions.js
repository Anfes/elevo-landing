"use client";

import CustomAccordion from "@components/CustomAccordion/CustomAccordion";
import { Typography } from "@mui/material";
import { useState } from "react";

const preguntas = [
  {
    title: "¿Qué es el servicio de telemedicina?",
    description:
      "Es un servicio de consulta médica virtual, en el que podrás recibir orientación médica, diagnóstico, tratamiento y recomendaciones para el cuidado de tu salud, a través de una videollamada con un médico general o especialista.",
  },
  {
    title: "¿Qué especialidades médicas puedo encontrar en elevo?",
    description:
      "En elevo podrás encontrar especialistas en medicina general, pediatría, ginecología, psicología, nutrición, fisioterapia, terapia ocupacional, terapia del lenguaje, terapia respiratoria, terapia de aprendizaje, terapia de pareja, terapia familiar, terapia sexual, terapia de duelo, terapia de ansiedad, terapia de depresión, terapia de estrés, terapia de conducta",
  },
  {
    title: "¿Cómo funciona el servicio de telemedicina?",
    description:
      "Es muy fácil, sólo debes ingresar a nuestra página web, seleccionar el servicio de telemedicina, elegir la especialidad médica que necesitas, agendar tu cita y listo. En el día y hora de tu cita, recibirás un correo electrónico con el link de acceso a la videollamada con tu médico.",
  },
  {
    title: "¿Qué debo hacer si no puedo asistir a mi cita?",
    description:
      "Si no puedes asistir a tu cita, debes cancelarla con mínimo 24 horas de anticipación, para que puedas reprogramarla. Si cancelas tu cita con menos de 24 horas de anticipación, no podrás reprogramarla y perderás el dinero de tu cita.",
  },
  {
    title: "¿Qué debo hacer si no puedo asistir a mi cita?",
    description:
      "Si no puedes asistir a tu cita, debes cancelarla con mínimo 24 horas de anticipación, para que puedas reprogramarla. Si cancelas tu cita con menos de 24 horas de anticipación, no podrás reprogramarla y perderás el dinero de tu cita.",
  },
];

const FrecuentQuestions = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

console.log("FrecuentQuestions.js: preguntas: ", expanded);

  return (
    <div className="flex justify-center container mx-auto xl:px-36 lg:px-36 px-0 mt-32">
      <div className="w-full">
        <Typography
          variant="h2"
          className="font-bold text-4xl text-center text-[#3F34BB] mb-8 "
        >
          <span style={{ color: "#2D3145" }}>Preguntas</span> frecuentes
        </Typography>
        <Typography
          variant="h6"
          className="text-center text-[#535978] mb-12 px-32 "
        >
          En elevo no queda nada al aire. Encuentra respuestas a tus dudas más
          comunes. Descubre todo lo que necesitas saber sobre nuestros masajes y
          servicios en nuestras preguntas frecuentes.
        </Typography>
        {preguntas.map((pregunta, index) => (
          <div key={index}>
            <CustomAccordion
              title={pregunta.title}
              description={pregunta.description}
              expanded={expanded === index}
              onChange={handleChange(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrecuentQuestions;
