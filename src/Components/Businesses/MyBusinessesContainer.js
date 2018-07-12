import { connect } from "react-redux";

import { fetchmyBusinesses } from "../../actions/businesses.actions";
import MyBusinesses from "./MyBusinesses";

// get data from store and provide as props
const mapStatetoProps = state => ({
  businesses: state.businesses,
  loading: state.loading
});

/* 
binds action creators to dispatch and 
provides then as props 
*/
const mapDispatchToProps = dispatch => ({
  fetchmyBusinesses: id => dispatch(fetchmyBusinesses(id))
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(MyBusinesses);
