import React, { Component } from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { isAuthenticated, logout, userName } = this.props;
    console.log("IS AUTH", isAuthenticated);
    return (
      <Menu fixed="top">
        <NavLink to="/" exact>
          <Menu.Item>weConnect</Menu.Item>
        </NavLink>
        <Menu.Menu position="right">
          <Menu.Item
            name="browse-businesses"
            color="orange"
            active={activeItem === "browse-businesses"}
            onClick={this.handleItemClick}
          >
            <a href="/businesses">View businesses</a>
          </Menu.Item>
          <Menu.Item
            name="search-business"
            color="orange"
            active={activeItem === "search-businesses"}
            onClick={this.handleItemClick}
          >
            <a href="/search/businesses">Search businesses</a>
          </Menu.Item>
          {isAuthenticated ? (
            <Dropdown item text={userName}>
              <Dropdown.Menu>
                <Menu.Item
                  name="my-businesses"
                  color="orange"
                  active={activeItem === "my-businesses"}
                  onClick={this.handleItemClick}
                >
                  <a href={`/user/${userName}/businesses`}>My businesses</a>
                </Menu.Item>
                <Menu.Item
                  name="create-business"
                  color="orange"
                  active={activeItem === "create-business"}
                  onClick={this.handleItemClick}
                >
                  <a href="/biz/new">Create businesses</a>
                </Menu.Item>
                <Menu.Item
                  name="logout"
                  color="orange"
                  onClick={() => logout()}
                >
                  Logout
                </Menu.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Menu.Item
              name="login"
              color="orange"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
            >
              <NavLink to="/login">Login</NavLink>
            </Menu.Item>
          )}
        </Menu.Menu>
      </Menu>
    );
  }
}
Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  currentUserId: PropTypes.number,
  userName: PropTypes.string
};
export default Header;
