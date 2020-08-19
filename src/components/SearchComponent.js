import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBy: "s",
      inputText: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log("handle");
    this.props.saveAPIData(this.state.searchBy, this.state.inputText);
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
        <button
          className="randomBTN "
          onClick={() => this.props.saveRandomDrink()}
        >
          <NavLink exact to="/cocktailmaster/favorite-list">
            {" "}
            Favorites
          </NavLink>
        </button>
        <button
          className="randomBTN "
          onClick={() => this.props.saveRandomDrink()}
        >
          <NavLink exact to="/cocktailmaster/random-result">
            Random
          </NavLink>
        </button>
        <form className="searchFieldContainer" onSubmit={this.handleSubmit}>
          <select
            className="options"
            onChange={(evt) => this.setState({ searchBy: evt.target.value })}
          >
            <option className="optionName" value="s">
              Name
            </option>
            <option className="optionName" value="f">
              First Letter
            </option>
            <option className="optionName" value="i">
              Ingredient
            </option>
          </select>
          <input
            type="text"
            maxLength={this.state.searchBy === "f" ? "1" : ""}
            onChange={(evt) => this.setState({ inputText: evt.target.value })}
            className="textInput"
          />
          <button
            type="submit"
            onClick={this.handleSubmit}
            className="searchBTN"
          >
            {" "}
            <NavLink exact to="/cocktailmaster/search-result">
              <FontAwesomeIcon icon={faSearch} />
            </NavLink>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchComponent;
