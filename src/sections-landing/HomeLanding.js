"use client";
import CustomLinkButton from "@components/CustomLinkButton/CustomLinkButton";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import Link from "next/link";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";

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
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Grid
      container
      className={clsx(
        matches ? classes.container : classes.containerResponsive,
        "flex items-center"
      )}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className="container sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full  ">
          <div className="md:w-1/2 w-full">
            <Typography
              variant="h1"
              className="font-bold md:text-6xl text-4xl md:leading-[4.5rem]	"
              color="#2D3145"
            >
              ¡Bienestar total en tu{" "}
              <span style={{ color: "#3F34BB" }}>propio hogar!</span>
            </Typography>
            <Typography
              variant="h6"
              className="md:text-2xl text-lg leading-[2rem] my-8"
              color="#2D3145"
            >
              Masajes quiroprácticos, relajantes y de recuperación deportiva a
              <span className="font-bold">domicilio</span>, con los{" "}
              <span className="font-bold">
                mejores profesionales de la salud
              </span>{" "}
              y estándares más altos de{" "}
              <span className="font-bold">calidad</span>
            </Typography>
            <div className="mt-10">
              <CustomLinkButton
                className="outlinedPrimary"
                label="Nuestros Servicios"
                href="#servicios"
              />
            </div>
          </div>
          <Link
            href="/reserva-cita"
            className=" fixed right-10 bottom-144 z-50"
          >
            <div
              className="flex justify-center items-center py-4 px-4"
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
              <TodayRoundedIcon className={"text-32 text-white"} />
            </div>
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};

export default HomeLanding;
