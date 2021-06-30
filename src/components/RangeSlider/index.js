import "./index.css";

//import du package Material UI Core pour le slider
import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}€`;
}

export default function RangeSlider({
  priceMax,
  setPriceMax,
  priceMin,
  setPriceMin,
}) {
  const classes = useStyles();
  const [value, setValue] = useState([0, 500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // setPriceMin(newValue[0]);
    // setPriceMax(newValue[1]);
  };

  const handleChangeCommited = (event, newValue) => {
    setPriceMin(newValue[0]);
    setPriceMax(newValue[1]);
  };

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        defaultValue={value}
        marks={true}
        onChange={handleChange}
        onChangeCommitted={handleChangeCommited}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={0}
        max={500}
        valueLabelDisplay="on"
        valueLabelFormat={valuetext}
        color="primary"
        step={5}
      />
    </div>
  );
}
