import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import DashboardMain from "../components/DashboardMain";

import * as dashboardService from "../../../duck/dashboard/services";

import * as dashboardAction from "../../../duck/dashboard/action";

class DashboardContainer extends Component {
  fetchAllProducts = () => {
    return this.props.actions.fetchAllProducts();
  };
  fetchCategoryProducts = (category) => {
    return this.props.actions.fetchCategoryProducts(category);
  };
  render() {
    return (
      <DashboardMain
        fetchAllProducts={this.fetchAllProducts}
        fetchCategoryProducts={this.fetchCategoryProducts}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsData: state.dashboard.products,
    productsLoading: state.dashboard.loading,
    productsError: state.dashboard.error,
    categoryProducts: state.dashboard.categoryProducts,
    categoryLoading: state.dashboard.categoryLoading,
    categoryError: state.dashboard.categoryError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      Object.assign({}, dashboardAction, dashboardService),
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
