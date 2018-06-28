import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "./Home.css";

function Home() {
  document.title = "weConnect | Home";
  return (
    <div className="index-container center">
      <h1>Open your E-Business Today.</h1>
      <a href="/event/new">
        <Button animated color="red">
          <Button.Content visible>GET STARTED</Button.Content>
          <Button.Content hidden>
            <Icon name="right arrow" />
          </Button.Content>
        </Button>
      </a>
    </div>
  );
}

export default Home;
