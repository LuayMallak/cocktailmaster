import React, { Component } from 'react'

export class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchBy: "s",
          inputText: "",
          homeRoute: false,
        }
    }

    render() {
        return (
            <div className={this.state.homeRoute ? "searchSectionHome sOnly" : "searchSection sOnly"}>
                <button className="randomBTN ">Random Cocktail</button>
                <div className="searchFieldContainer">
                    <select className="options" onChange={(evt) => this.setState({searchBy: evt.target.value})}>
                        <option value="s">Cocktail Name</option>
                        <option value="f">First Letter</option>
                        <option value="i">Ingredient</option>
                    </select>
                    <input
                    type="text"
                    maxLength={this.state.searchBy === "f" ? "1" : ""}
                    onChange={(evt) =>
                        this.setState({ inputText: evt.target.value })
                    }
                    className="textInput"
                    />
                    <button onClick={this.getData} className="searchBTN">
                    Search
                    </button>
                </div>
            </div>
        )
    }
}

export default SearchComponent
