import axios from "axios";
import {
  addProductRequest,
  addProductRequestFailure,
  addProductRequestSuccess,
  editProductRequest,
  editProductRequestFailure,
  editProductRequestSuccess,
  productDetailRequest,
  productDetailRequestFailure,
  productDetailRequestSuccess,
} from "./action";

export const addProduct = (formData) => {
  return (dispatch) => {
    dispatch(addProductRequest());
    return axios
      .post("https://fakestoreapi.com/products", formData)
      .then((response) => {
        if (response?.status === 200) {
          dispatch(addProductRequestSuccess(response?.data));
          return response;
        }
      })
      .catch((error) => {
        dispatch(addProductRequestFailure(error.message));
      });
  };
};

export const productDetail = (id) => {
  return (dispatch) => {
    dispatch(productDetailRequest());
    return axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (response?.status === 200) {
          dispatch(productDetailRequestSuccess(response?.data));
          return response;
        }
      })
      .catch((error) => {
        dispatch(productDetailRequestFailure(error.message));
      });
  };
};

export const editProduct = (id, formData) => {
  return (dispatch) => {
    dispatch(editProductRequest());
    return axios
      .put(`https://fakestoreapi.com/products/${id}`, formData)
      .then((response) => {
        if (response?.status === 200) {
          dispatch(editProductRequestSuccess(response?.data));
          return response;
        }
      })
      .catch((error) => {
        dispatch(editProductRequestFailure(error.message));
      });
  };
};
