import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AddProductMain from "../components/AddProductMain";
import * as addProductService from "../../../duck/product/services";
import * as addProductAction from "../../../duck/product/action";

export class AddProductContainer extends Component {
  productDetail = (id) => {
    return this.props.actions.productDetail(id);
  };

  addProduct = (formData) => {
    return this.props.actions.addProduct(formData);
  };

  editProduct = (id, formData) => {
    return this.props.actions.editProduct(id, formData);
  };

  /**
   * clear product detail data
   * @returns
   */
  clearProductData = () => {
    return this.props.actions.clearProductData();
  };

  render() {
    return (
      <AddProductMain
        addProduct={this.addProduct}
        productDetail={this.productDetail}
        editProduct={this.editProduct}
        clearProductData={this.clearProductData}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addProductData: state.product.addProducts,
    addProductLoading: state.product.addLoading,
    addProductError: state.product.addError,
    editProductData: state.product.editProducts,
    editProductError: state.product.editError,
    editProductLoading: state.product.editLoading,
    productDetailData: state.product.productDetailData,
    productDetailLoading: state.product.productDetailLoading,
    productDetailError: state.product.productDetailError,
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
