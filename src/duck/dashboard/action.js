import {
  FETCH_ALL_PRODUCTS_REQUEST,
  FETCH_ALL_PRODUCTS_REQUEST_SUCCESS,
  FETCH_ALL_PRODUCTS_REQUEST_FAILURE,
  FETCH_CATEGORY_PRODUCTS_REQUEST,
  FETCH_CATEGORY_PRODUCTS_REQUEST_SUCCESS,
  FETCH_CATEGORY_PRODUCTS_REQUEST_FAILURE,
} from "./types";

export function fetchAllProductsRequest() {
  return {
    type: FETCH_ALL_PRODUCTS_REQUEST,
  };
}

export function fetchAllProductsRequestSuccess(data) {
  return {
    type: FETCH_ALL_PRODUCTS_REQUEST_SUCCESS,
    payload: data,
  };
}

export function fetchAllProductsRequestFailure(error) {
  return {
    type: FETCH_ALL_PRODUCTS_REQUEST_FAILURE,
    payload: error,
  };
}

export function fetchCategoryProductsRequest() {
  return {
    type: FETCH_CATEGORY_PRODUCTS_REQUEST,
  };
}

export function fetchCategoryProductsRequestSuccess(data) {
  return {
    type: FETCH_CATEGORY_PRODUCTS_REQUEST_SUCCESS,
    payload: data,
  };
}

export function fetchCategoryProductsRequestFailure(error) {
  return {
    type: FETCH_CATEGORY_PRODUCTS_REQUEST_FAILURE,
    payload: error,
  };
}
