import {
  ADD_PRODUCTS_REQUEST,
  ADD_PRODUCTS_REQUEST_SUCCESS,
  ADD_PRODUCTS_REQUEST_FAILURE,
  EDIT_PRODUCTS_REQUEST,
  EDIT_PRODUCTS_REQUEST_SUCCESS,
  EDIT_PRODUCTS_REQUEST_FAILURE,
  DELETE_PRODUCTS_REQUEST,
  DELETE_PRODUCTS_REQUEST_SUCCESS,
  DELETE_PRODUCTS_REQUEST_FAILURE,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_REQUEST_SUCCESS,
  PRODUCT_DETAIL_REQUEST_FAILURE,
  CLEAR_PRODUCT_DATA,
} from "./type";

const initialState = {
  addLoading: false,
  addProducts: [],
  addError: {},
  editLoading: false,
  editProducts: [],
  editError: {},
  deleteLoading: false,
  deleteProducts: [],
  deleteError: {},
  productDetailLoading: false,
  productDetailData: [],
  productDetailError: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_REQUEST:
      return {
        ...state,
        addLoading: true,
      };
    case ADD_PRODUCTS_REQUEST_SUCCESS:
      return {
        ...state,
        addLoading: false,
        addProducts: action.payload,
      };
    case ADD_PRODUCTS_REQUEST_FAILURE:
      return {
        ...state,
        addLoading: false,
        addError: action.payload,
      };

    case EDIT_PRODUCTS_REQUEST:
      return {
        ...state,
        editLoading: true,
      };
    case EDIT_PRODUCTS_REQUEST_SUCCESS:
      return {
        ...state,
        editLoading: false,
        editProducts: action.payload,
      };
    case EDIT_PRODUCTS_REQUEST_FAILURE:
      return {
        ...state,
        editLoading: false,
        editError: action.payload,
      };

    case DELETE_PRODUCTS_REQUEST:
      return {
        ...state,
        deleteLoading: true,
      };
    case DELETE_PRODUCTS_REQUEST_SUCCESS:
      return {
        ...state,
        deleteLoading: false,
        deleteProducts: action.payload,
      };
    case DELETE_PRODUCTS_REQUEST_FAILURE:
      return {
        ...state,
        deleteLoading: false,
        deleteError: action.payload,
      };

    case PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        productDetailLoading: true,
      };

    case PRODUCT_DETAIL_REQUEST_SUCCESS:
      return {
        ...state,
        productDetailLoading: false,
        productDetailData: action.payload,
      };
    case PRODUCT_DETAIL_REQUEST_FAILURE:
      return {
        ...state,
        productDetailLoading: false,
        productDetailError: action.payload,
      };
    case CLEAR_PRODUCT_DATA:
      return {
        addLoading: false,
        addProducts: [],
        addError: {},
        editLoading: false,
        editProducts: [],
        editError: {},
        deleteLoading: false,
        deleteProducts: [],
        deleteError: {},
        productDetailLoading: false,
        productDetailData: [],
        productDetailError: {},
      };
    default:
      return state;
  }
};

export default productReducer;
