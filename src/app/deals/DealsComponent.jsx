import React, { Component } from 'react';

import DealList from '../components/DealList';

class Deals extends Component {
  componentWillMount() {
    const { actions } = this.props;
    const { fetchDeals } = actions;
    fetchDeals();
  }

  render() {
    return <DealList />;
  }
}


export default Deals;
