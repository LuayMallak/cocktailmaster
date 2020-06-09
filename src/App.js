import React from "react";
import SearchComponent from "./components/SearchComponent";
import Navigation from "./navigation";

/* components */
import "./App.scss";

import { getDataList } from "./utils/functions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeRoute: false,
      drinks: [],
    };
    this.toggleHomeRoute = this.toggleHomeRoute.bind(this);
    this.saveAPIData = this.saveAPIData.bind(this);
  }
  toggleHomeRoute() {
    this.setState({ homeRoute: !this.state.homeRoute });
  }
  saveAPIData(searchBy, InputText) {
    getDataList(searchBy, InputText)
      .then((drinks) => this.setState({ drinks: drinks }))
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidMount() {
    getDataList(this.state.searchBy, this.state.inputText)
      .then((drinks) => this.setState({ drinks: drinks.drinks }))
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <SearchComponent
          saveAPIData={this.saveAPIData}
          toggleHomeRoute={this.toggleHomeRoute}
        />
        <Navigation />
      </div>
    );
  }
}

export default App;
