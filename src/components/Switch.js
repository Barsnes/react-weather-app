import React from "react";

class Switch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handle = {
      position: "absolute",
      backgroundColor: "#000",
      width: "40%",
      height: "80%",
      top: "10%",
      left: this.props.degrees ? ".3rem" : "1.7rem",
      gridRow: "1 / 2"
    };

    return (
      <div className="switch" onClick={this.props.changeDegrees}>
        <p>C</p>
        <p>F</p>
        <span className="handle" style={handle}>
          O
        </span>
      </div>
    );
  }
}

export default Switch;
