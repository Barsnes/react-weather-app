import React from "react";

import Day from "./Day";

class Weather extends React.Component {
  render() {
    return (
      <div>
        <Day
          degrees={this.props.degrees}
          city={this.props.items}
          isLoaded={this.props.isLoaded}
        />
      </div>
    );
  }
}

export default Weather;
