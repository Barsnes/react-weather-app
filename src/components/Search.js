import React from "react";

import Switch from "./Switch";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.props.handleSubmit}>
          <input
            onChange={this.props.handleChange}
            type="text"
            placeholder="Search city"
            value={this.props.cityInput}
          />
          <button type="submit">Search</button>
        </form>
        <Switch
          degrees={this.props.degrees}
          changeDegrees={this.props.changeDegrees}
        />
      </div>
    );
  }
}

export default Search;
