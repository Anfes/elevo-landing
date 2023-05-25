"use client";
import CustomLinkButton from "@components/CustomLinkButton/CustomLinkButton";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

const WorkUs = () => {
  const [ancho, setAncho] = useState(0);

  useEffect(() => {
    setAncho(window.innerWidth);
  }, []);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(360deg, #211B5A 0%, rgba(18, 38, 139, 0.3) 100%), url("/assets/images/home/workus.png")`,
        backgroundColor: "#2D3145",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: `${(592 * ancho) / 1440}px`,
      }}
      className="mt-32"
    >
      <div className="container mx-auto xl:px-0 lg:px-36 px-0 flex flex-col justify-center items-center h-full">
        <Typography
          variant="h2"
          className="font-bold text-5xl text-center text-[#fff] mb-12 "
        >
          ¿Eres un <span className="text-[#72DEDD]">fisioterapeuta</span> o{" "}
          <span className="text-[#72DEDD]">masoterapeuta</span> con experiencia
          y quieres ser parte de <span className="text-[#72DEDD]">elevo</span>{" "}
          la plataforma más TOP de bienestar en Colombia
          <span className="text-[#72DEDD]">?</span>
        </Typography>
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
