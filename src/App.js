import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"

/* components */
import "./App.scss";
import Home from "./View/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBy: "s",
      inputText: "",
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="App">
            <main className="main">
              <Route exact path="/">
                <Home />
              </Route>
            </main>
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
