import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import SearchResult from "./View/SearchResult"
import SearchComponent from './components/SearchComponent'

/* components */
import "./App.scss";
import Home from "./View/Home";

class App extends React.Component {
  /* constructor(props) {
    super(props);
    this.state = {
      searchBy: "s",
      inputText: "",
    }; */
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <React.Fragment>
            <div className="App">
              <SearchComponent />              
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/search-result">
                  <SearchResult/>
                </Route>
            </div>
          </React.Fragment>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
