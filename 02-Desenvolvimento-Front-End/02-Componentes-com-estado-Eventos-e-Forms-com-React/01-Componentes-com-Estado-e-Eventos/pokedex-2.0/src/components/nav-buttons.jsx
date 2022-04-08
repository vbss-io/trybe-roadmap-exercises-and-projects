import React, { Component } from "react";
import './buttons.css';

class NavButton extends Component {
  render() {
    const { text, handleClick, visible } = this.props;
    return (
      <button className="nav-button" onClick={handleClick} disabled={visible}>{text}</button>
    );
  }
}

export default NavButton;