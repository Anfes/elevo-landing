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
        <div className="flex justify-between py-6 ">
          <div className={smallMovil ? "flex items-center" : "flex flex-col items-center"}>
            <img
              src="assets/images/icon/icon-elevo.png"
              alt="logo"
              className="w-40 mr-2"
            />
          </div>
          {matches && (
            <div className="grid grid-cols-5 gap-4">
              {menuList.map((menu, index) => (
                <Link href={menu.link} className={classes.menuText}>
                  {menu.name}
                </Link>
              ))}
              <Link
                href="/reserva-cita"
                className={clsx(classes.reserveLink, classes.menuText, "text-center px-[20px] py-[10px] ")}
              >
                ¡Reserva ahora! <TodayRoundedIcon className="ml-2" />
              </Link>
            </div>
          )}
          {!matches && (
            <div className="xs:gap-4 gap-1 flex items-center">
              <Link
                href="/reserva-cita"
                className={clsx(classes.reserveLink, classes.menuText, "text-[12px] sm:text-[16px] text-center px-[5px] py-[10px] sm:px-[20px] sm:py-[10px] ")}
              >
                ¡Reserva ahora! {!movil && <TodayRoundedIcon className="ml-2 " />}
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
