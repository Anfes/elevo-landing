"use client";
import CustomLinkButton from "@components/CustomLinkButton/CustomLinkButton";
import {
  Button,
  Dialog,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import Link from "next/link";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import Image from "next/image";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: "url(/assets/images/home/principal-home.png)",
    height: "100vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionX: "center",
  },
  containerResponsive: {
    backgroundImage: "url(/assets/images/home/principal-home-responsive.png)",
    height: "90vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionX: "right",
  },
}));
const HomeLanding = () => {
  const classes = useStyles();
  const mdMatches = useMediaQuery("(min-width:960px)");
  const matches = useMediaQuery("(min-width:600px)");
  const [dialog, setDialog] = useState(false);

  return (
    <Grid
      container
      className={clsx(
        matches ? classes.container : classes.containerResponsive,
        "flex items-center"
      )}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        {/* {dialog && ( */}
          <Dialog
            maxWidth={mdMatches ? "lg" : "md"}
            open={dialog}
            onClose={() => setDialog(false)}
            fullScreen={!matches}
          >
            <div className="flex sm:flex-row flex-col justify-center items-center p-8 rounded-3xl sm:h-auto h-screen ">
              {matches && (
                <IconButton className="absolute top-0 right-0 cursor-pointer">
                  <CloseIcon onClick={() => setDialog(false)} />
                </IconButton>
              )}
              <iframe
                width={mdMatches ? 920 : matches ? 600 : "100%"}
                height="500px"
                src="https://www.youtube.com/embed/sHuI1Y7sa6w"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="rounded-2xl"
              />
              {!matches && (
                <div className="flex justify-center items-center mt-8">
                  <CustomLinkButton
                    onClick={() => setDialog(false)}
                    label="Cerrar"
                    className="primary"
                  />
                </div>
              )}
            </div>
          </Dialog>
        {/* )} */}
        <div className="container sm:mx-auto xl:px-36 lg:px-36 px-8 md:py-0 py-8 min-w-full flex md:flex-row flex-col mb-32 ">
          <div className="md:w-1/2 w-full md:mb-0 mb-12">
            <Typography
              variant="h1"
              className="sm:font-semibold font-bold sm:leading-[72px] leading-10 sm:text-6xl text-[32px] md:leading-[4.5rem] mb-6	"
              color="#2D3145"
            >
              ¡Bienestar total en tu{" "}
              <span style={{ color: "#3F34BB" }}>propio hogar!</span>
            </Typography>
            <Typography
              variant="h6"
              className="sm:text-xl text-base sm:leading-8 leading-6  sm:font-medium font-normal sm:mb-6 mb-8 "
              color="#2D3145"
            >
              Masajes quiroprácticos, relajantes y de recuperación deportiva a
              <span className="font-bold"> domicilio</span>, con los{" "}
              <span className="font-bold">
                mejores profesionales de la salud
              </span>{" "}
              y estándares más altos de{" "}
              <span className="font-bold">calidad</span>
            </Typography>
            <div>
              <CustomLinkButton
                className="outlinedPrimary"
                label="Nuestros Servicios"
                href="#servicios"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full px-24 flex flex-col justify-center items-center">
            <Button onClick={() => setDialog(true)}>
              <Image
                src="/assets/images/home/button-video.png"
                alt="button-video"
                width={matches ? 280 : 200}
                height={matches ? 100 : 200}
              />
            </Button>
            <Typography
              variant="h6"
              className="md:text-lg text-xs font-semibold md:leading-[2rem] my-1 text-center"
              color="#5346DD"
            >
              Mira lo que hacemos por tí..
            </Typography>
          </div>
        </div>
      </Grid>
      <Link href="/reserva-cita" className=" fixed right-6 bottom-144 z-50">
        <div
          className="flex justify-center items-center py-6 px-6"
          style={{
            backgroundColor: "#651DFF",
            boxShadow: "0px 4px 8px rgba(79, 12, 221, 0.3)",
            borderRadius: 64,
          }}
        >
          {matches && (
            <Typography className={"text-18 font-semibold mr-2 text-white"}>
              Reservar servicio
            </Typography>
          )}
          <TodayRoundedIcon className={"text-[32px] text-white"} />
        </div>
      </Link>
    </Grid>
  );
};

export default HomeLanding;
