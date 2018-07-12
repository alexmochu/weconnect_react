import { editBusiness } from "../../actions/businesses.actions";
import { connect } from "react-redux";

import EditBusiness from "./EditBusiness";

// get data from store and provide as props
const mapStateToProps = state => ({});

/* 
binds action creators to dispatch and 
provides then as props 
*/
const mapDispatchToProps = dispatch => ({
  editBusiness: (id, data) => dispatch(editBusiness(id, data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBusiness);
