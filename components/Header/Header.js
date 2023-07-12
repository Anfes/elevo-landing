"use client";
import Link from "next/link";
import clsx from "clsx";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Image from "next/image";

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
    fontWeight: "600",
    fontSize: "14px",
    "&:hover": {
      color: "#000",
    },
  },
  reserveLink: {
    backgroundColor: "#5346DD",
    color: "#fff",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#5F53DF",
      color: "#fff",
    },
  },
  loginLink: {
    backgroundColor: "#fff",
    color: "#5346DD",
    border: "1px solid #5346DD",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#EFE8FF",
      color: "#5346DD",
    },
  },
}));

const menuList = [
  {
    name: "Inicio",
    link: "#inicio",
  },
  {
    name: "Servicios",
    link: "#servicios",
  },
  {
    name: "Trabaja con nosotros",
    link: "#trabaja-con-nosotros",
  },
  {
    name: "Contáctanos",
    link: "#contacto",
  },
  {
    name: "Inicio sesión",
    link: "/inicio-sesion",
  }
];

const Header = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:1200px)");
  const movil = useMediaQuery("(max-width:600px)");
  const smallMovil = useMediaQuery("(max-width:380px)");
  const [drawer, setDrawer] = useState(false);

  return (
    <AppBar position="static" className={classes.header}>
      <div className="container sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full ">
        <div className="flex justify-between sm:py-6 pb-6 pt-12 ">
          <div
            className={
              smallMovil
                ? "flex items-center justify-center "
                : "flex flex-col items-center justify-center "
            }
          >
            <Image
              src="/assets/images/icon/icon-elevo.png"
              alt="logo"
              className="mr-2"
              width={160}
              height={40}
            />
          </div>
          {matches && (
            <div className="grid grid-row-1 grid-flow-col gap-8">
              {menuList.map((menu, index) => (
                <Link
                  key={index + 1}
                  href={menu.link}
                  className={classes.menuText}
                >
                  {menu.name}
                </Link>
              ))}
              <Link
                href="/inicio-sesion"
                className={clsx(
                  classes.loginLink,
                  classes.menuText,
                  "text-center text-sm px-4 py-3"
                )}
              >
                Iniciar sesión
              </Link>
              <Link
                href="/reserva-cita"
                className={clsx(
                  classes.reserveLink,
                  classes.menuText,
                  "text-center text-sm px-4 py-3"
                )}
              >
                ¡Reserva ahora! <TodayRoundedIcon className="ml-2 text-lg " />
              </Link>
            </div>
          )}
          {!matches && (
            <div className="xs:gap-4 gap-1 flex items-center">
              {!movil && (
                <Link
                  href="/inicio-sesion"
                  className={clsx(
                    classes.loginLink,
                    classes.menuText,
                    "text-center text-sm px-4 py-3"
                  )}
                >
                  Iniciar sesión
                </Link>
              )}
              <Link
                href="/reserva-cita"
                className={clsx(
                  classes.reserveLink,
                  classes.menuText,
                  "text-center text-sm px-4 py-3 sm:mx-0 mx-2 "
                )}
              >
                ¡Reserva ahora!
              </Link>
              <IconButton
                className="w-1 h-1"
                onClick={() => {
                  setDrawer(true);
                }}
              >
                <MenuIcon className="text-[#3F34BB]" />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawer}
                onClose={() => setDrawer(false)}
              >
                <Box
                  sx={250}
                  role="presentation"
                  onClick={() => setDrawer(false)}
                  onKeyDown={() => setDrawer(false)}
                >
                  <List>
                    {menuList.map((menu, index) => (
                      <ListItem key={index}>
                        <ListItemButton>
                          <ListItemText primary={menu.name} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </div>
          )}
        </div>
      </div>
    </AppBar>
  );
};

export default Header;
