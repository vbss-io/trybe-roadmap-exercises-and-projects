import React from "react";
import "./footer.css";
import "../cssReset.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
          <p>{`Aplicação desenvolvida em React usando referencias do site: `}
          <a href="https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number#Generation_I">
            Bulbapedia
          </a>
          </p>
      </footer>
    );
  }
}

export default Footer;