import {
  fetchBusiness,
  deleteBusiness,
  fetchReviews
} from "../../actions/businesses.actions";
import MyBusinessItem from "./MyBusinessItem";
import { connect } from "react-redux";

// get data from store and provide as props
const mapStateToProps = state => ({
  business: state.business,
  error: state.error,
  loading: state.loading,
  reviews: state.reviews.reviews
});

/* 
  binds action creators to dispatch and 
  provides then as props 
  */
const mapDispatchToProps = dispatch => ({
  fetchBusiness: id => dispatch(fetchBusiness(id)),
  deleteBusiness: id => dispatch(deleteBusiness(id)),
  fetchReviews: id => dispatch(fetchReviews(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyBusinessItem);
