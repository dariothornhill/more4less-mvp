import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dealsOperations } from './duck';
import Deals from './DealsComponent';

function mapStateToProps(state) {
  return {
    deals: state.dealsReducer.deals,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        fetchDeals: dealsOperations.fetchDeals,
      },
      dispatch,
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Deals);
