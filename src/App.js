import React from "react";
import SearchComponent from "./components/SearchComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
/* components */
import "./App.scss";
import {
  getDataList,
  isInFavorite,
  getDataByID,
  getRandomCocktail,
  clearFavorites,
  clearRandoms,
} from "./utils/functions";
import Home from "./View/Home";
import SearchResult from "./View/SearchResult";
import RandomResult from "./View/RandomResult";
import FavoriteList from "./View/FavoriteList";
import Page404 from "./View/Page404";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeRoute: false,
      byIngredients: true,
      drinks: [],
      favorites: [],
      randoms: [],
      searchBy: "s",
      inputText: "margarita",
    };
    this.toggleByIngredients = this.toggleByIngredients.bind(this);
    this.saveAPIData = this.saveAPIData.bind(this);
    this.saveToFavorite = this.saveToFavorite.bind(this);
    this.saveRandomDrink = this.saveRandomDrink.bind(this);
    this.clearFavorites = clearFavorites.bind(this);
    this.clearRandoms = clearRandoms.bind(this);
  }

  toggleByIngredients() {
    this.setState({ byIngredients: !this.state.byIngredients });
  }

  async saveAPIData(searchBy, InputText) {
    console.log("searchBy");
    try {
      const drinks = await getDataList(searchBy, InputText);

      this.setState({ drinks: drinks.drinks, byIngredients: searchBy === "i" });
    } catch (err) {
      console.log(err);
    }
  }
  async saveRandomDrink() {
    try {
      const randomDrink = await getRandomCocktail();
      let randoms = this.state.randoms;
      randoms.unshift(randomDrink.drinks[0]);
      this.setState({ randoms });
    } catch (err) {
      console.log(err);
    }
  }
  componentDidMount() {
    let drinks = JSON.parse(localStorage.getItem("favoriteDrinks"));
    this.setState({ favorites: drinks, drinks });
  }

  saveToFavorite(drink) {
    let drinks = this.state.favorites;
    let finalDrinks = [];
    if (drinks) {
      if (isInFavorite(drinks, drink.idDrink)) {
        finalDrinks = drinks.filter((item) => item.idDrink !== drink.idDrink);
      } else {
        finalDrinks = [...drinks, drink];
      }

      //
    } else {
      finalDrinks = [drink];
    }
    this.setState({ favorites: finalDrinks });
    localStorage.setItem("favoriteDrinks", JSON.stringify(finalDrinks));
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/">
            {" "}
            <SearchComponent
              saveRandomDrink={this.saveRandomDrink}
              saveAPIData={this.saveAPIData}
              toggleHomeRoute={this.toggleHomeRoute}
            />
          </Route>
          <Switch>
            <Route exact path="/cocktailmaster">
              <Home />
            </Route>
            <Route path="/cocktailmaster/search-result">
              <SearchResult
                drinksList={this.state.drinks}
                favoriteList={this.state.favorites}
                saveToFavorite={this.saveToFavorite}
                saveSingleData={this.saveSingleData}
                byIngredients={this.state.byIngredients}
                toggleByIngredients={this.toggleByIngredients}
              />
            </Route>
            <Route path="/cocktailmaster/random-result">
              <RandomResult
                randomList={this.state.randoms}
                favoriteList={this.state.favorites}
                saveToFavorite={this.saveToFavorite}
                clearRandoms={this.clearRandoms}
              />
            </Route>
            <Route path="/cocktailmaster/favorite-list">
              <FavoriteList
                favoriteList={this.state.favorites}
                saveToFavorite={this.saveToFavorite}
                clearFavorites={this.clearFavorites}
              />
            </Route>
            <Route path="/">
              <Page404 />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
