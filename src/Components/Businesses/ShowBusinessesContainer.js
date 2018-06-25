import { connect } from "react-redux";

import { fetchBusinesses } from "../../actions/businesses.actions";
import ShowBusinesses from "./ShowBusinesses";

// get data from store and provide as props
const mapStatetoProps = state => ({
  businesses: state.businesses
});

/* 
binds action creators to dispatch and 
provides them as props 
*/
const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(ShowBusinesses);
