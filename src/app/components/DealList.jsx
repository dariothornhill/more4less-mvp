import React from 'react';
import { connect } from 'react-redux';
import DealCard from './DealCard';


class DealList extends React.Component {

  render() {
    const { deals } = this.props;

    const list = deals.map(x => (
      <DealCard
        key={x.id}
        product={x.product}
      />
    ));

    return <div className="row">{list}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log("DealList State:", state);
  return {
    deals: state.dealsReducer.deals || [],
  };
};

export default connect(mapStateToProps)(DealList);
