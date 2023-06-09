"use client";
import { Grid, Typography } from "@mui/material";
import clsx from "clsx";
import CustomLinkButton from "@components/CustomLinkButton/CustomLinkButton";
import Link from "next/link";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: "url(/assets/images/home/quiroterapia-home.png)",
    height: "90vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container className={clsx(classes.container, "flex items-center")}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className="container mx-auto xl:px-36 lg:px-36 px-0 ">
          <div className="w-1/2">
            <Typography
              variant="h1"
              className="font-bold text-6xl leading-[4.5rem]	"
              color="#2D3145"
            >
              <span style={{ color: "#3F34BB" }}> Quiroterapia</span>
            </Typography>
            <Typography
              variant="h6"
              className="text-2xl leading-[2rem] my-8"
              color="#2D3145"
            >
              Técnicas manuales, suaves y rítmicas que generan bienestar
              corporal. Aplicación de aceites esenciales.
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

export default Home;
