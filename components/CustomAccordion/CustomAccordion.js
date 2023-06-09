"use client";
import { makeStyles, withStyles } from "@mui/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import clsx from "clsx";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  summaryTittle: {
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "24px",
  },
}));

const AccordionCustom = withStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: "none",
  },
}))(Accordion);

const AccordionSummaryCustom = withStyles((theme) => ({
  root: {
    padding: "10px 10px",
  },
}))(AccordionSummary);

const CustomAccordion = (props) => {
  const { title, description, expanded, onChange } = props;
  const classes = useStyles();

  return (
    <AccordionCustom
      expanded={expanded}
      style={{
        borderBottom: expanded ? "1px solid #500CDD" : "1px solid #E6E8F7",
      }}
      onChange={onChange}
    >
      <AccordionSummaryCustom
        expandIcon={
          expanded ? (
            <RemoveCircleOutlineIcon style={{ color: "#500CDD" }} />
          ) : (
            <AddCircleOutlineIcon style={{ color: "#500CDD" }} />
          )
        }
        className={classes.summary}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography
          color={expanded ? "#500CDD" : "#535978"}
          style={{ fontWeight: expanded ? "bold" : "normal" }}
          className={classes.summaryTittle}
        >
          {title}
        </Typography>
      </AccordionSummaryCustom>
      <AccordionDetails>
       {description}
      </AccordionDetails>
    </AccordionCustom>
  );
};

export default CustomAccordion;
