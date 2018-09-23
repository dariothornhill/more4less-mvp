import React, { Component, PropTypes} from "react";
import { connect } from "react-redux";
import {bindActionCreators } from 'redux';
import { fetchProducts } from "../actions";
import ProductList from "../components/ProductList";


class Products extends Component {

    componentWillMount() {
        console.log("Products:", this.props.actions);
        const { fetchProducts } = this.props.actions;
        fetchProducts();
    }

    render() {
        return <ProductList />;
    }
}

function mapStateToProps(state) {
    return {
      appState: state
    };
  }
   
function  mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({
        fetchProducts
      }, dispatch)
    };
  }
/*Products.propTypes = {
    appState: PropTypes.object,
    loading : PropTypes.bool,
    items : PropTypes.array
}; */
export default connect(null, mapDispatchToProps)(Products);