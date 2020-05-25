import React from "react";
import "./App.scss";
import Home from "./components/Home";

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
      <div className="App">
        <main className="main">
          <div className="container">
            <Home />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
