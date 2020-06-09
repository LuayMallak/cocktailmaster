import React from "react";
import SearchComponent from "./components/SearchComponent";
import Navigation from "./navigation";
import { BrowserRouter, Route } from "react-router-dom";
/* components */
import "./App.scss";

import { getDataList } from "./utils/functions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeRoute: false,
      drinks: [],
      singleDrink: {},
      searchBy: "s",
      inputText: "margarita",
    };
    this.toggleHomeRoute = this.toggleHomeRoute.bind(this);
    this.saveAPIData = this.saveAPIData.bind(this);
  }
  toggleHomeRoute() {
    this.setState({ homeRoute: !this.state.homeRoute });
  }
  async saveAPIData(searchBy, InputText) {
    try {
      const drinks = await getDataList(searchBy, InputText);
      this.setState({ drinks: drinks.drinks });
    } catch (err) {
      console.log(err);
    }
  }
  async componentDidMount() {}
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/">
            <SearchComponent
              saveAPIData={this.saveAPIData}
              toggleHomeRoute={this.toggleHomeRoute}
            />
          </Route>
          <Navigation state={this.state} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
