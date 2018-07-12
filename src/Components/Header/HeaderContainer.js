import { connect } from "react-redux";

import Header from "./Header";
import { logout } from "../../actions/auth.actions";

// get data from store and provide as props
const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.isAuthenticated,
  userName: state.auth.user.username,
  show: state.user.show
});

/* 
binds action creators to dispatch and 
provides them as props 
*/
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
