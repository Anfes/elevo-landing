"use client";
import CustomLinkButton from "@components/CustomLinkButton/CustomLinkButton";
import { Grid, Typography } from "@mui/material";
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
  },
}));
const HomeLanding = () => {
  const classes = useStyles();
  return (
    <Grid container className={clsx(classes.container, "flex items-center")}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className="container mx-auto">
          <div className="w-1/2">
            <Typography
              variant="h1"
              className="font-bold text-6xl leading-[4.5rem]	"
              color="#2D3145"
            >
              ¡Bienestar total en tu{" "}
              <span style={{ color: "#3F34BB" }}>propio hogar!</span>
            </Typography>
            <Typography
              variant="h6"
              className="text-2xl leading-[2rem] my-8"
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
                href="#"
              />
            </div>
          </div>
          <Link href="#" className=" fixed right-10 bottom-144 z-999">
            <div
              className="flex justify-center items-center py-4 px-4"
              style={{
                backgroundColor: "#651DFF",
                boxShadow: "0px 4px 8px rgba(79, 12, 221, 0.3)",
                borderRadius:64
              }}
            >
              <Typography className={"text-18 font-semibold mr-2 text-white"}>
                Reservar servicio
              </Typography>
              <TodayRoundedIcon className={"text-32 text-white"} />
            </div>
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};

export default HomeLanding;
