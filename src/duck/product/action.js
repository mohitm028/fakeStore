import {
  ADD_PRODUCTS_REQUEST,
  ADD_PRODUCTS_REQUEST_FAILURE,
  ADD_PRODUCTS_REQUEST_SUCCESS,
  DELETE_PRODUCTS_REQUEST,
  DELETE_PRODUCTS_REQUEST_FAILURE,
  DELETE_PRODUCTS_REQUEST_SUCCESS,
  EDIT_PRODUCTS_REQUEST,
  EDIT_PRODUCTS_REQUEST_FAILURE,
  EDIT_PRODUCTS_REQUEST_SUCCESS,
} from "./type";

export function addProductRequest() {
  return {
    type: ADD_PRODUCTS_REQUEST,
  };
}

export function addProductRequestSuccess(data) {
  return {
    type: ADD_PRODUCTS_REQUEST_SUCCESS,
    payload: data,
  };
}

export function addProductRequestFailure(error) {
  return {
    type: ADD_PRODUCTS_REQUEST_FAILURE,
    payload: error,
  };
}

// edit

export function editProductRequest() {
  return {
    type: EDIT_PRODUCTS_REQUEST,
  };
}

export function editProductRequestSuccess(data) {
  return {
    type: EDIT_PRODUCTS_REQUEST_SUCCESS,
    payload: data,
  };
}

export function editProductRequestFailure(error) {
  return {
    type: EDIT_PRODUCTS_REQUEST_FAILURE,
    payload: error,
  };
}

// delete
export function deleteProductRequest() {
  return {
    type: DELETE_PRODUCTS_REQUEST,
  };
}

export function deleteProductRequestSuccess(data) {
  return {
    type: DELETE_PRODUCTS_REQUEST_SUCCESS,
    payload: data,
  };
}

export function deleteProductRequestFailure(error) {
  return {
    type: DELETE_PRODUCTS_REQUEST_FAILURE,
    payload: error,
  };
}
