import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  primary: {
    background: "#5346DD",
    color: "white",
    borderRadius: 8,
    fontWeight: 600,
    borderRadius: 8,
    padding: 14,
    "&:hover": {
      background: "#8850FF",
      textDecoration: "none",
    },
    "&:focus": {
      background: "#651DFF",
      textDecoration: "none",
    },
  },
  secondary: {
    background: "#72DEDD",
    color: "#1C4C4C",
    borderRadius: 8,
    fontWeight: 600,
    borderRadius: 8,
    padding: 14,
    "&:hover": {
      background: "#7DE0DF",
      textDecoration: "none",
    },
    "&:focus": {
      background: "#5FD9D7",
      textDecoration: "none",
    },
  },
  outlinedPrimary: {
    background: "white",
    border: "2px solid #5346DD",
    color: "#5346DD",
    fontWeight: 600,
    borderRadius: 8,
    padding: 14,
    "&:hover": {
      background: "#EFE8FF",
      textDecoration: "none",
    },
    "&:focus": {
      background: "#CDB5FF",
      textDecoration: "none",
    },
  },
  outlinedSecondary: {
    background: "white",
    border: "2px solid #72DEDD",
    color: "#72DEDD",
    fontWeight: 600,
    borderRadius: 8,
    padding: 14,
    "&:hover": {
      background: "#EFE8FF",
      textDecoration: "none",
    },
    "&:focus": {
      background: "#CDB5FF",
      textDecoration: "none",
    },
  },

  outlinedWhite: {
    background: "transparent",
    border: "2px solid #fff",
    color: "#fff",
    fontWeight: 600,
    borderRadius: 8,
    padding: 14,
    "&:hover": {
      color: "#EFE8FF",
      textDecoration: "none",
    },
    "&:focus": {
      background: "#CDB5FF",
      textDecoration: "none",
    },
  },
}));

const CustomLinkButton = (props) => {
  const classes = useStyles();
  const { label, className, icon, width, href } = props;

  const variantButton =
    className === "primary"
      ? classes.primary
      : className === "outlinedPrimary"
      ? classes.outlinedPrimary
      : className === "outlinedSecondary"
      ? classes.outlinedSecondary
      : className === "outlinedWhite"
      ? classes.outlinedWhite
      : className === "secondary"
      ? classes.secondary
      : classes.primary;

  return (
    <Button
      {...props}
      className={variantButton}
      variant={className === "primary" ? "contained" : "text"}
      style={{ width: width && width }}
    >
      <Link href={href}>
        {label} {icon && icon}
      </Link>
    </Button>
  );
};

export default CustomLinkButton;
