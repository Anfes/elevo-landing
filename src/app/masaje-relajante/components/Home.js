"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import clsx from "clsx";
import CustomLinkButton from "@components/CustomLinkButton/CustomLinkButton";
import Link from "next/link";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: "url(/assets/images/home/masaje-relajante-home.png)",
    height: "90vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionX: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Grid container className={clsx(classes.container, "flex items-center")}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className="container sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full">
          <div className="md:w-1/2 w-full">
            <Typography
              variant="h1"
              className="font-bold md:text-6xl text-4xl md:leading-[4.5rem]	"
              color="#2D3145"
            >
              Masaje
              <span style={{ color: "#3F34BB" }}> Relajante</span>
            </Typography>
            <Typography
              variant="h6"
              className="md:text-2xl text-lg leading-[2rem] my-8"
              color="#2D3145"
            >
              <span className="font-bold">Experiencia terapéutica</span>, que
              combina movimientos suaves y rítmicos para el{" "}
              <span className="font-bold">bienestar general</span>, que
              mediante el uso de aceites esenciales te llevarán a un momento de
              <span className="font-bold"> paz y tranquilidad</span> para tu
              cuerpo y tu mente. y estándares más altos de{" "}
              <span className="font-bold">calidad</span>
            </Typography>
            <div className="mt-10">
              <CustomLinkButton
                className="primary"
                label="¡Quiero reservar este servicio!"
                icon={<TodayRoundedIcon className={"ml-4"} />}
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

export default Home;
