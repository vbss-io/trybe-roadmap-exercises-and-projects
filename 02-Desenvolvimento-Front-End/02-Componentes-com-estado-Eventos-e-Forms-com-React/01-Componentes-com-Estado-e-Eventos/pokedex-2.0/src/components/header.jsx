import React from "react";
import './header.css';
import '../cssReset.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="title">Pokedex</h1>
      </header>
    );
  }
}

export default Header;