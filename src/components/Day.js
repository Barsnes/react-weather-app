import React from "react";

class Day extends React.Component {
  render() {
    const city = this.props.city;
    if (!this.props.isLoaded) {
      return (
        <div className="weatherCard">
          <h1>Loading...</h1>
        </div>
      );
    } else if (city.cod === "404") {
      return (
        <div className="weatherCard">
          <p>{city.message}</p>
        </div>
      );
    } else {
      const celcius = city.main.temp;
      const fahrenheit = (city.main.temp * 9) / 5 + 32;
      return (
        <div className="weatherCard">
          <img
            alt={city.weather[0].description}
            src={
              "http://openweathermap.org/img/w/" + city.weather[0].icon + ".png"
            }
          />
          {this.props.degrees ? (
            <span>{celcius}C</span>
          ) : (
            <span>{fahrenheit}F</span>
          )}
          <p>
            <span
              className={
                "flag-icon flag-icon-" + city.sys.country.toLowerCase()
              }
            />
            {city.name}
          </p>
        </div>
      );
    }
  }
}

export default Day;
