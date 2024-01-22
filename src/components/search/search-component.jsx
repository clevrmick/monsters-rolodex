import { Component } from "react";
import "./search-component.styles.css";

export default class SearchBox extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <input
        type=""
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onSearch}
      />
    );
  }
}
