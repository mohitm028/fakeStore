import {
  fetchAllProductsRequest,
  fetchAllProductsRequestFailure,
  fetchAllProductsRequestSuccess,
  fetchCategoryProductsRequest,
  fetchCategoryProductsRequestFailure,
  fetchCategoryProductsRequestSuccess,
} from "./action";
import axios from "axios";

export const fetchAllProducts = () => {
  return (dispatch) => {
    dispatch(fetchAllProductsRequest());
    return axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        if (response?.status === 200) {
          dispatch(fetchAllProductsRequestSuccess(response?.data));
          return response;
        }
      })
      .catch((error) => {
        dispatch(fetchAllProductsRequestFailure(error.message));
      });
  };
};

export const fetchCategoryProducts = (category) => {
  return (dispatch) => {
    dispatch(fetchCategoryProductsRequest());
    return axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        if (response?.status === 200) {
          dispatch(fetchCategoryProductsRequestSuccess(response?.data));
          return response;
        }
      })
      .catch((error) => {
        dispatch(fetchCategoryProductsRequestFailure(error.message));
      });
  };
};
