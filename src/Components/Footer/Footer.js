import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <Menu className="footer">
        <p>
          2018 weConnect UI Templates Project by{" "}
          <a href="https://github.com/alexmochu">alexmochu</a>.
        </p>
      </Menu>
    );
  }
}

export default Footer;
