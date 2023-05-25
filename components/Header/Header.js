"use client";
import Link from "next/link";
import clsx from "clsx";
import { AppBar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#FAFAFF",
    boxShadow: "none",
  },
  menuText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#535978",
    fontSize: "16px",
    fontWeight: "600",

    "&:hover": {
      color: "#000",
    },
  },
  reserveLink: {
    backgroundColor: "#5346DD",
    color: "#fff",
    borderRadius: "5px",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "#5F53DF",
      color: "#fff",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <div className="container mx-auto">
        <div className="flex justify-between py-6 ">
          <div className="flex items-center">
            <img
              src="assets/images/icon/icon-elevo.png"
              alt="logo"
              className="w-40 mr-2"
            />
          </div>
          <div className="grid grid-cols-5 gap-4">
            <Link href="#inicio" className={classes.menuText}>
              Inicio
            </Link>
            <Link href="#servicios" className={classes.menuText}>
              Servicios
            </Link>
            <Link href="#trabaja-con-nosotros" className={classes.menuText}>
              Trabaja con nosotros
            </Link>
            <Link href="#contacto" className={classes.menuText}>
              Contáctanos
            </Link>
            <Link
              href="/reserva-cita"
              className={clsx(classes.reserveLink, classes.menuText)}
            >
              ¡Reserva ahora! <TodayRoundedIcon className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </AppBar>
  );
};

export default Header;
