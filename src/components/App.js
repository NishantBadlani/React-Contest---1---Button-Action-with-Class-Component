import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showParagraph: false
    };
  }

  handleClick = () => {
    this.setState({ showParagraph: !this.state.showParagraph });
  };

  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button id="click" onClick={handleClick}>
          Click
        </button>
        {this.state.showParagraph ? (
          <p>
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : null}
      </div>
    );
  }
}

export default App;
