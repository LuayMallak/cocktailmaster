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
        <div className="container">
          <div className="header">
            <h1>Cocktail Master</h1>
            <h3 className="searchDescription">
              Search for a cocktail by name, ingredient or first letter
            </h3>
          </div>
          <div className="searchSection">
            <div className="searchButtons">
              <p
                onClick={() => this.setState({ searchBy: "s" })}
                className="nameBTN BTN"
                title="search by cocktail name"
              >
                <FontAwesomeIcon icon={faCocktail} />
              </p>
              <p
                onClick={() => this.setState({ searchBy: "f" })}
                className="letterBTN BTN"
              >
                <FontAwesomeIcon icon={faFont} />
              </p>
              <p
                onClick={() => this.setState({ searchBy: "i" })}
                className="ingredientsBTN BTN"
              >
                <FontAwesomeIcon icon={faWineBottle} />
              </p>
            </div>
            <div className="searchFieldContainer">
              <input
                type="text"
                onChange={(evt) =>
                  this.setState({ inputText: evt.target.value })
                }
                className="textInput"
              />
              <button onClick={this.getData} className="searchBTN">
                Search
              </button>
            </div>
            <button className="randomBTN ">Get Random Cocktail</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
