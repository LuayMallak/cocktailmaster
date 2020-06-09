import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import { Drink } from "./Card";

const useStyles = makeStyles((theme) => ({
  root: {
    width: " 90vw",
    margin: "auto",
    marginTop: "10vh",
    backgroundColor: " rgba(255, 255, 255, 0.95)",
    minHeight: " 100vh",
    paddingTop: "50px",
    borderRadius: "5px",
    flexDirection: "row",
  },
}));

function SearchResult(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          {props.state.drinks.map((drink, index) => (
            <Drink key={index} drink={drink} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchResult;
