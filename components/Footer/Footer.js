"use client";

import CustomLinkButton from "@components/CustomLinkButton/CustomLinkButton";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import { Typography } from "@mui/material";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-[#2E2499] py-16">
      <div className="container sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full grid grid-cols-3 ">
        <div className="flex flex-col first-letter: md:col-span-1 col-span-3 mb-12">
          <Image
            src="/assets/images/icon/icon-elevo-w.png"
            alt="logo"
            className="mb-8"
            width={160}
            height={40}
          />
          <Typography variant="body1" className="text-[#fff] text-[12px] mb-12">
            elevo es una plataforma digital que conecta a los mejores
            profesionales de la salud con personas que buscan bienestar y
            calidad de vida.
          </Typography>
          <div className="mb-8 w-full flex md:justify-start justify-center">
            <CustomLinkButton
              className="secondary"
              href="/reserva-cita"
              label="Reserva un servicio"
              icon={
                <TodayRoundedIcon
                  style={{ color: "#1C4C4C" }}
                  className="ml-6"
                />
              }
            />
          </div>
          <Typography variant="body1" className="text-[#fff] font-bold ">
            Conoce más de nosotros en nuestras redes.
          </Typography>
          <div className="flex gap-8 mt-8 md:justify-start justify-center">
            <Link href="https://www.facebook.com/elevo.co" target="_blank">
              <FacebookIcon style={{ color: "#fff" }} className="" />
            </Link>
            <Link href="https://www.facebook.com/elevo.co" target="_blank">
              <TwitterIcon style={{ color: "#fff" }} className="" />
            </Link>
            <Link href="https://www.facebook.com/elevo.co" target="_blank">
              <InstagramIcon style={{ color: "#fff" }} className="" />
            </Link>
            <Link href="https://www.facebook.com/elevo.co" target="_blank">
              <YouTubeIcon style={{ color: "#fff" }} className="" />
            </Link>
            <Link href="https://www.facebook.com/elevo.co" target="_blank">
              <LinkedInIcon style={{ color: "#fff" }} className="" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:items-center md:col-span-1 col-span-3 mb-12">
          <div>
            <Typography variant="h6" className="text-[#72DEDD] font-bold mb-8">
              Enlaces
            </Typography>
            <Typography
              variant="body1"
              className="text-[#fff] mb-8 font-semibold"
            >
              <Link href="#inicio">Inicio</Link>
            </Typography>
            <Typography
              variant="body1"
              className="text-[#fff] mb-8 font-semibold"
            >
              <Link href="#servicios">Servicios</Link>
            </Typography>
            <Typography
              variant="body1"
              className="text-[#fff] mb-8 font-semibold"
            >
              <Link href="#trabaja-con-nosotros">Trabaja con nosotros</Link>
            </Typography>
            <Typography
              variant="body1"
              className="text-[#fff] mb-8 font-semibold"
            >
              <Link href="#contacto">Contáctanos</Link>
            </Typography>
          </div>
        </div>
        <div className="flex flex-col md:items-center md:col-span-1 col-span-3 mb-12">
          <div>
            <Typography variant="h6" className="text-[#72DEDD] font-bold mb-8">
              Compañía
            </Typography>
            <Typography
              variant="body1"
              className="text-[#fff] mb-8 font-semibold"
            >
              <Link href="#nosotros">Nosotros</Link>
            </Typography>
            <Typography
              variant="body1"
              className="text-[#fff] mb-8 font-semibold"
            >
              <Link href="#">Políticas de privacidad y Habeas data</Link>
            </Typography>
            <Typography
              variant="body1"
              className="text-[#fff] mb-8 font-semibold"
            >
              <Link href="#">Términos y condiciones de uso </Link>
            </Typography>
          </div>
        </div>
      </div>
      <div className="mt-32 py-12 border-t-[1px] border-t-solid border-t-[#6A5CFF] container sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full">
        <Typography variant="body1" className="text-[#8B81FF] text-left">
          © Copyright 2023 elevo LLC | All Rights Reserved.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
