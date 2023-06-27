"use client";
import CustomLinkButton from "@components/CustomLinkButton/CustomLinkButton";
import { Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

const WorkUs = () => {
  const [ancho, setAncho] = useState(0);
  const matches = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    setAncho(window.innerWidth);
  }, []);
  return (
    <div
      style={{
        backgroundImage:matches? `linear-gradient(360deg, #211B5A 0%, rgba(18, 38, 139, 0.3) 100%), url("/assets/images/home/workus.png")`: `linear-gradient(360deg, #211B5A 0%, rgba(18, 38, 139, 0.3) 100%), url("/assets/images/home/workus-responsive.png")`,
        backgroundColor: "#2D3145",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionX: "center",
        width: "100%",
        height: matches? `${(592 * ancho) / 1440}px`:`${(816 * ancho)/428}px`,
      }}
      className="mt-32"
    >
      <div className="container mx-auto flex flex-col justify-center items-center h-full sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full ">
        {matches && (
          <Typography
            variant="h2"
            className="font-bold md:text-5xl text-3xl text-center text-[#fff] mb-12 "
          >
            ¿Eres un <span className="text-[#72DEDD]">fisioterapeuta</span> o{" "}
            <span className="text-[#72DEDD]">masoterapeuta</span> con
            experiencia y quieres ser parte de{" "}
            <span className="text-[#72DEDD]">elevo</span> la plataforma más TOP
            de bienestar en Colombia
            <span className="text-[#72DEDD]">?</span>
          </Typography>
        )}
        {!matches && (
          <Typography
            variant="h2"
            className="font-bold text-4xl text-center text-[#fff] mb-12 "
          >
            ¿Eres un <span className="text-[#72DEDD]">especialista </span> en el
            tratamiento de trastornos{" "}
            <span className="text-[#72DEDD]">osteomusculares?</span>
          </Typography>
        )}
        <CustomLinkButton
          className="secondary"
          href="/trabaja-con-nosotros"
          label="Trabaja con nosotros"
        />
      </div>
    </div>
  );
};

export default WorkUs;
