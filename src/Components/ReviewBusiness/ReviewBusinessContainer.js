import { createReview } from "../../actions/businesses.actions";
import { connect } from "react-redux";

import ReviewBusiness from "./ReviewBusiness";

// get data from store and provide as props
const mapStateToProps = state => ({});

/* 
binds action creators to dispatch and 
provides then as props 
*/
const mapDispatchToProps = dispatch => ({
  createReview: (id, data) => dispatch(createReview(id, data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewBusiness);
