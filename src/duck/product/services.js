import axios from "axios";
import {
  addProductRequest,
  addProductRequestFailure,
  addProductRequestSuccess,
} from "./action";

export const addProduct = (formData) => {
  console.log("api form data", formData);
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
