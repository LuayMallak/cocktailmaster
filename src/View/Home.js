import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
