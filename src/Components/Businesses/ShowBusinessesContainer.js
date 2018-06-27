import { connect } from "react-redux";

import {
  fetchBusinesses,
  messageCleared
} from "../../actions/businesses.actions";
import ShowBusinesses from "./ShowBusinesses";

// get data from store and provide as props
const mapStatetoProps = state => ({
  businesses: state.businesses,
  loading: state.loading,
  error: state.error,
  message: state.user.message
});

/* 
binds action creators to dispatch and 
provides then as props 
*/
const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  messageCleared: () => dispatch(messageCleared())
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(ShowBusinesses);
