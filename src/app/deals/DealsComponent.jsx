import React, { Component } from "react";

import DealList from "../components/DealList";
import Navigation from "../components/Navigation";

class Deals extends Component {
  componentWillMount() {
    const { actions } = this.props;
    const { fetchDeals } = actions;
    fetchDeals();
  }

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <DealList />
      </React.Fragment>
    );
  }
}

export default Deals;
