import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import {
  ingredientsGenerator,
  saveToFavorite,
  isInFavorite,
} from "../utils/functions";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "90%",
    margin: "2% auto",
  },
  media: {
    height: "100%",
    paddingTop: "58.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export function Drink(props) {
  const ingedientsArr = ingredientsGenerator(props.drink);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.drink.strDrink}
        subheader={props.drink.strAlcoholic}
      />
      <CardMedia
        className={classes.media}
        image={props.drink.strDrinkThumb}
        title={props.drink.strDrink}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          INGREDIENTS:{" "}
          {ingedientsArr.map(
            (item) => item.ingredient + " " + item.measure + ", "
          )}{" "}
          and Cheers
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={() => saveToFavorite(props.drink)}
          aria-label="add to favorites"
          color={isInFavorite(props.drink.idDrink) ? "secondary" : ""}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Instructions:</Typography>
          <Typography paragraph>{props.drink.strInstructions}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
