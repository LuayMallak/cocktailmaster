import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";

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

function FavoriteList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.favoriteList ? (
        <Button
          variant="contained"
          color="secondary"
          onClick={props.clearFavorites}
        >
          CLEAR FAVORITES
        </Button>
      ) : (
        ""
      )}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          {props.favoriteList &&
            props.favoriteList.map((drink, index) => (
              <Drink
                key={index}
                drink={drink}
                isInFavorite={
                  props.favoriteList &&
                  isInFavorite(props.favoriteList, drink.idDrink)
                }
                saveToFavorite={props.saveToFavorite}
                ingredientsArr={ingredientsGenerator(drink)}
              />
            ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default FavoriteList;
