import React from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ingredientsGenerator, getDataByID } from "../utils/functions";

const useStyles = (theme) => ({
  root: {
    maxWidth: "90%",
    margin: "2% auto",
  },
  media: {
    height: "100%",
    paddingTop: "100%",
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
  greyHeart: { color: "default" },
  redHeart: {
    color: "secondary",
  },
});

class Drink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      isIngredients: this.props.byIngredients,
      ingredientsArr: this.props.ingredientsArr,
      instructions: this.props.drink.strInstructions,
    };
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  async handleExpandClick() {
    if (this.props.byIngredients) {
      let oneDrink = await getDataByID(this.props.drink.idDrink);

      let ingredientsArr = ingredientsGenerator(oneDrink.drinks[0]);
      console.log(ingredientsArr);
      this.setState({ ingredientsArr, instructions: oneDrink.strInstructions });
    }

    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardHeader
          action={<IconButton aria-label="settings"></IconButton>}
          title={this.props.drink.strDrink}
          subheader={this.props.drink.strAlcoholic}
        />
        <CardMedia
          className={classes.media}
          image={this.props.drink.strDrinkThumb}
          title={this.props.drink.strDrink}
        />
        <CardContent> </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() => this.props.saveToFavorite(this.props.drink)}
            aria-label="add to favorites"
            color={this.props.isInFavorite ? "secondary" : ""}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {" "}
            <Typography paragraph>
              Ingredients:
              {this.state.ingredientsArr.map(
                (item) => item.ingredient + " " + item.measure + ", "
              )}
              and Cheers
            </Typography>
            <Typography paragraph>Instructions:</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.state.instructions}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(useStyles)(Drink);
