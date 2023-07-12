"use client";
import { Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import Slider from "react-slick";
import StarIcon from "@mui/icons-material/Star";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const responsive = {
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
};

const listPatients = [
  {
    id: 1,
    name: "Juan Perez",
    rating: 4.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Enim congue cum sed et lorem elit rutrum consequat sit. Varius sapien nunc ac in curabitur cras gravida. Arcu in aliquam.",
    city: "Bogotá",
    date: "Hace 2 días",
    img: "/assets/images/avatars/patient1.png",
  },
  {
    id: 2,
    name: "Juan Perez",
    rating: 4.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Enim congue cum sed et lorem elit rutrum consequat sit. Varius sapien nunc ac in curabitur cras gravida. Arcu in aliquam.",
    city: "Bogotá",
    date: "Hace 2 días",
    img: "/assets/images/avatars/patient2.png",
  },
  {
    id: 3,
    name: "Juan Perez",
    rating: 4.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Enim congue cum sed et lorem elit rutrum consequat sit. Varius sapien nunc ac in curabitur cras gravida. Arcu in aliquam.",
    city: "Bogotá",
    date: "Hace 2 días",
    img: "/assets/images/avatars/patient3.png",
  },
  {
    id: 4,
    name: "Juan Perez",
    rating: 4.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Enim congue cum sed et lorem elit rutrum consequat sit. Varius sapien nunc ac in curabitur cras gravida. Arcu in aliquam.",
    city: "Bogotá",
    date: "Hace 2 días",
    img: "/assets/images/avatars/patient4.png",
  },
  {
    id: 4,
    name: "Juan Perez",
    rating: 4.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Enim congue cum sed et lorem elit rutrum consequat sit. Varius sapien nunc ac in curabitur cras gravida. Arcu in aliquam.",
    city: "Bogotá",
    date: "Hace 2 días",
    img: "/assets/images/avatars/patient4.png",
  },
];

const Patients = () => {
  return (
    <div className="bg-[#FAFAFF] pt-[120px] pb-4 mb-[120px]" >
      <div className="container sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full mb-32">
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <Typography className="font-bold text-[32px] text-center text-[#2D3145] mb-16 ">
          Lo que nuestros <span style={{ color: "#3F34BB" }}>pacientes</span>{" "}
          dicen de nosotros
        </Typography>
        <Slider
          infinite
          rows
          dots
          autoplaySpeed={3000}
          autoplay
          arrows={false}
          swipe
          swipeToSlide
          slidesToShow={
            listPatients?.length === 1
              ? 1
              : listPatients?.length === 2
              ? 2
              : listPatients?.length === 3
              ? 3
              : 3
          }
          {...responsive}
        >
          {listPatients?.length &&
            listPatients.map((e, index) => {
              return (
                <div key={index} className="mb-8">
                  <div className="w-full flex justify-center items-center">
                    <div className="sm:max-w-[320px] max-w-[380px] min-h-[400px] bg-white rounded-3xl ">
                      <Image
                        src={e.img}
                        className="w-full"
                        style={{ borderRadius: "16px 16px 0px 0px" }}
                        alt={e.name}
                        width={500}
                        height={500}
                      />

                      <div className="px-6 pt-6 pb-[32px]">
                        <div className="flex items-center  mb-4">
                          <Typography
                            color="#3F34BB"
                            className="font-semibold text-20"
                          >
                            {e.name} - {e.rating}{" "}
                          </Typography>
                          <StarIcon
                            style={{ color: "#FE51B9" }}
                            className="ml-[1px]"
                          />
                        </div>
                        <Typography color="#6B7097" className="text-14">
                          {e.comment}
                        </Typography>
                        <Typography
                          className="mt-4 text-right"
                          color="#7D85AB"
                          style={{ fontSize: "12px" }}
                        >{`${e.date} - ${e.city}`}</Typography>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default Patients;
