import React from "react";
import ReactDOM from "react-dom";

import Weather from "./components/Weather";
import Search from "./components/Search";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      cityInput: "",
      degrees: true
    };
  }

  componentDidMount() {
    const str =
      "https://api.openweathermap.org/data/2.5/weather?q=oslo&units=metric&cnt=7&APPID=12f707b43bb28bd5bacfb261ecf3203a&mode=JSON";
    fetch(str)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  handleChange = e => {
    this.setState({
      cityInput: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.cityInput === "") {
    } else {
      this.setState({
        isLoaded: false
      });
      const city = this.state.cityInput;
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&cnt=7&APPID=12f707b43bb28bd5bacfb261ecf3203a&mode=JSON"
      )
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              isLoaded: true,
              items: result,
              cityInput: ""
            });
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
    }
  };

  changeDegrees = () => {
    this.setState({
      degrees: !this.state.degrees
    });
  };

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    } else {
      return (
        <div className="app">
          <Search
            cityInput={this.state.cityInput}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            degrees={this.state.degrees}
            changeDegrees={this.changeDegrees}
          />
          <Weather
            items={this.state.items}
            degrees={this.state.degrees}
            isLoaded={this.state.isLoaded}
          />
        </div>
      );
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
