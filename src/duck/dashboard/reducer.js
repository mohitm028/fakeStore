import {
  FETCH_ALL_PRODUCTS_REQUEST,
  FETCH_ALL_PRODUCTS_REQUEST_FAILURE,
  FETCH_ALL_PRODUCTS_REQUEST_SUCCESS,
} from "./types";

const initialState = {
  loading: false,
  products: [],
  error: {},
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
    default:
      return state;
  }
};

export default dashboardReducer;
