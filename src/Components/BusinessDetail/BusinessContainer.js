import { fetchBusiness } from "../../actions/businesses.actions";
import BusinessItem from "./BusinessItem";
import { connect } from "react-redux";

// get data from store and provide as props
const mapStateToProps = state => ({
  business: state.business,
  error: state.error,
  loading: state.loading,
  currentUserId: state.auth.user.sub,
  isAuthenticated: !!state.user.auth_token,
  userName: state.auth.user.username
});

/* 
binds action creators to dispatch and 
provides then as props 
*/
const mapDispatchToProps = dispatch => ({
  fetchBusiness: id => dispatch(fetchBusiness(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessItem);
