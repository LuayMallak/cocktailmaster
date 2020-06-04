import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCocktail,
  faFont,
  faWineBottle,
} from "@fortawesome/free-solid-svg-icons";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      searchBy: "s",
      inputText: "",
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    let drinks = fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?${this.state.searchBy}=${this.state.inputText}`
    )
      .then((res) => res.json())
      .then((drinks) => this.setState({ drinks: drinks.drinks }))
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {}
  render() {
    return (
      <React.Fragment>
        <div className="homeContainer">
          <div className="container">
            <div className="header">
              <h1>Cocktail Master</h1>
              <h3 className="searchDescription">
                Search for a cocktail by name, ingredient or first letter
              </h3>
            </div>
            
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
