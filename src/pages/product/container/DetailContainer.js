import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DetailProduct from "../components/DetailProduct";
import * as productDetailService from "../../../duck/product/services";
import * as productDetailAction from "../../../duck/product/action";

export class DetailContainer extends Component {
  /**
   * fetch individual product detail
   * @param {string} id
   * @returns
   */
  productDetail = (id) => {
    return this.props.actions.productDetail(id);
  };

  /**
   * clear product detail data
   * @returns
   */
  clearProductData = () => {
    return this.props.actions.clearProductData();
  };

  deleteProduct = (id) => {
    return this.props.actions.deleteProduct(id);
  };

  render() {
    return (
      <DetailProduct
        productDetail={this.productDetail}
        deleteProduct={this.deleteProduct}
        clearProductData={this.clearProductData}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productDetailData: state.product.productDetailData,
    productDetailLoading: state.product.productDetailLoading,
    productDetailError: state.product.productDetailError,
    deleteLoading: state.product.deleteLoading,
    deleteProductData: state.product.deleteProducts,
    deleteError: state.product.deleteError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      Object.assign({}, productDetailAction, productDetailService),
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
