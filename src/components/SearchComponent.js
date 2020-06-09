import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBy: "s",
      inputText: "",
    };
  }

  render() {
    return (
      <div
        className={
          this.props.homeRoute
            ? "searchSectionHome sOnly"
            : "searchSection sOnly"
        }
      >
        <button className="randomBTN ">Random Cocktail</button>
        <div className="searchFieldContainer">
          <select
            className="options"
            onChange={(evt) => this.setState({ searchBy: evt.target.value })}
          >
            <option value="s">Cocktail Name</option>
            <option value="f">First Letter</option>
            <option value="i">Ingredient</option>
          </select>
          <input
            type="text"
            maxLength={this.state.searchBy === "f" ? "1" : ""}
            onChange={(evt) => this.setState({ inputText: evt.target.value })}
            className="textInput"
          />
          <button
            className="searchBTN"
            onClick={() => {
              this.props.toggleHomeRoute();
              this.props.saveAPIData(this.state.searchBy, this.state.inputText);
            }}
          >
            {" "}
            <NavLink exact to="/search-result">
              Search
            </NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default SearchComponent;
