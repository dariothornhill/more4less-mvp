import ProductCard from "./ProductCard";
import React from "react";
import { connect } from "react-redux";

class ProductList extends React.Component {
  render() {
    const products = this.props.products || [];
    const list = products.map(x => (
      <ProductCard
        key={x.id}
        image={x.image}
        title={x.title}
        description={x.description}
      />
    ));

    return <div className="row">{list}</div>;
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    products: state.productsReducer.products
  };
};

export default connect(mapStateToProps)(ProductList);
