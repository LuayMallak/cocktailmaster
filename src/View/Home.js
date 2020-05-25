import React from "react";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      searchBy: "s",
      inputText: "",
    };
    this.getData = this.getData.bind(this)
  }

  getData() {
    let drinks = fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?${this.state.searchBy}=${this.state.inputText}`
    )
      .then((res) => res.json())
      .then((drinks) =>
        this.setState({ drinks: drinks.drinks })
      )
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
          <h3>Search for a cocktail by name, ingredient or first letter</h3>
        </div>
        <div className="searchSection">
          <div className="searchButtons">
            <button
              onClick={() => this.setState({ searchBy: "s" })}
              className="nameBTN BTN"
            >
              Name
            </button>
            <button
              onClick={() => this.setState({ searchBy: "f" })}
              className="letterBTN BTN"
            >
              First Letter
            </button>
            <button
              onClick={() => this.setState({ searchBy: "i" })}
              className="ingredientsBTN BTN"
            >
              Ingredients
            </button>
          </div>
          <input
            type="text"
            onChange={(evt) => this.setState({ inputText: evt.target.value })}
            className="textInput"
          />
          <button onClick={this.getData} className="searchBTN">Search</button>
          <button className="randomBTN ">Get Random Cocktail</button>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
