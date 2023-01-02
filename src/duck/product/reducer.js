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

    default:
      return state;
  }
};

export default productReducer;
