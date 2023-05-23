import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  primary: {
    background: "#5346DD",
    color: "white",
    borderRadius: 8,
    "&:hover": {
      background: "#8850FF",
      textDecoration: "none",
    },
    "&:focus": {
      background: "#651DFF",
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
  const { label, className, icon } = props;

  const variantButton =
    className === "primary"
      ? classes.primary
      : className === "outlinedPrimary"
      ? classes.outlinedPrimary
      : className === "outlinedWhite"
      ? classes.outlinedWhite
      : "";

  return (
    <Link
      {...props}
      className={variantButton}
      onClick={() => {}}
      variant={className === "primary" ? "contained" : "text"}
    >
      {label} {icon && icon}
    </Link>
  );
};

export default CustomLinkButton;
