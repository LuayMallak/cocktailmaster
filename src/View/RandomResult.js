import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Drink from "../components/Drink";
import { isInFavorite, ingredientsGenerator } from "../utils/functions";
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

function RandomResult(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.randomList ? (
        <Button
          variant="contained"
          color="secondary"
          onClick={props.clearRandoms}
        >
          CLEAR RANDOMS
        </Button>
      ) : (
        ""
      )}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          {props.randomList.map((drink, index) => (
            <Drink
              key={index}
              drink={drink}
              isInFavorite={isInFavorite(props.favoriteList, drink.idDrink)}
              saveToFavorite={props.saveToFavorite}
              ingredientsArr={ingredientsGenerator(drink)}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default RandomResult;
