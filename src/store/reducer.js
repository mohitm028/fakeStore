import { combineReducers } from "redux";
import dashboardReducer from "../duck/dashboard/reducer";
import productReducer from "../duck/product/reducer";

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  product: productReducer,
});

export default rootReducer;
