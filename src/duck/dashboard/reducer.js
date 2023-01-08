import {
  FETCH_ALL_PRODUCTS_REQUEST,
  FETCH_ALL_PRODUCTS_REQUEST_FAILURE,
  FETCH_ALL_PRODUCTS_REQUEST_SUCCESS,
  FETCH_CATEGORY_PRODUCTS_REQUEST,
  FETCH_CATEGORY_PRODUCTS_REQUEST_FAILURE,
  FETCH_CATEGORY_PRODUCTS_REQUEST_SUCCESS,
} from "./types";

const initialState = {
  loading: false,
  products: [],
  error: {},
  categoryLoading: false,
  categoryProducts: [],
  categoryError: {},
};
const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_PRODUCTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case FETCH_ALL_PRODUCTS_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_CATEGORY_PRODUCTS_REQUEST:
      return {
        ...state,
        categoryLoading: true,
      };
    case FETCH_CATEGORY_PRODUCTS_REQUEST_SUCCESS:
      return {
        ...state,
        categoryLoading: false,
        categoryProducts: action.payload,
      };
    case FETCH_CATEGORY_PRODUCTS_REQUEST_FAILURE:
      return {
        ...state,
        categoryLoading: false,
        categoryError: action.payload,
      };

    default:
      return state;
  }
};

export default dashboardReducer;
