import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AddProductMain from "../components/AddProductMain";
import * as addProductService from "../../../duck/product/services";
import * as addProductAction from "../../../duck/product/action";

export class AddProductContainer extends Component {
  addProduct = (formData) => {
    return this.props.actions.addProduct(formData);
  };
  render() {
    return <AddProductMain addProduct={this.addProduct} {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    addProductData: state.product.addProducts,
    addProductLoading: state.product.addLoading,
    addProductError: state.product.addError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      Object.assign({}, addProductAction, addProductService),
      dispatch
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductContainer);
