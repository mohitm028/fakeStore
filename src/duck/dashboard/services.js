import {
  fetchAllProductsRequest,
  fetchAllProductsRequestFailure,
  fetchAllProductsRequestSuccess,
} from "./action";
import axios from "axios";

export const fetchAllProducts = () => {
  return (dispatch) => {
    dispatch(fetchAllProductsRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        if (response?.status === 200) {
          dispatch(fetchAllProductsRequestSuccess(response?.data));
        }
      })
      .catch((error) => {
        dispatch(fetchAllProductsRequestFailure(error.message));
      });
  };
};
