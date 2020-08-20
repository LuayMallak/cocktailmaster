import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import Drink from "../components/Drink";
import { isInFavorite, ingredientsGenerator } from "../utils/functions";
const useStyles = makeStyles((theme) => ({
  root: {
    width: " 90vw",
    margin: "auto",
    marginTop: "50vh",
    /* backgroundColor: "rgba(255, 255, 255, 0.95)", */
    backgroundColor: "rgba(214, 168, 168, 0.2)",
    minHeight: " 100vh",
    paddingTop: "5rem",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  subRoot: {
    width: " 31%",
    margin: "1rem",
    marginTop: "0",
    backgroundColor: "transparent",
    paddingTop: "0",
    borderRadius: "0",
  },
}));

function SearchResult(props) {
  console.log(props.drinksList);
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.root} spacing={0}>
        {props.drinksList &&
          props.drinksList.map((drink, index) => (
            <Grid className={classes.subRoot} xs={12} sm={12} md={4} lg={3}>
              <Drink
                key={index}
                drink={drink}
                isInFavorite={isInFavorite(props.favoriteList, drink.idDrink)}
                saveToFavorite={props.saveToFavorite}
                byIngredients={props.byIngredients}
                ingredientsArr={ingredientsGenerator(drink)}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default SearchResult;
