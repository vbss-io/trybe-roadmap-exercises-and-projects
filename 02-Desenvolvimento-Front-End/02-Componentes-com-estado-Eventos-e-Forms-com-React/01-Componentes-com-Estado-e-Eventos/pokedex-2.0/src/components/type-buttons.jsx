import React, { Component } from "react";
import './buttons.css';

class TypeButtons extends Component {
    render() {

        const { text, handleClick } = this.props;

        return (
          <button className="type-button" onClick={handleClick}>{text}</button>
        );
    }
}

export default TypeButtons;