import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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

function Page404(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="secondary"
        onClick={props.clearRandoms}
      >
        <NavLink exact to="/cocktailmaster/">
          BACK TO HOMEPAGE
        </NavLink>
      </Button>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          Sorry, page doesn't exist!
        </Grid>
      </Grid>
    </div>
  );
}

export default Page404;
