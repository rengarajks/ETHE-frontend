import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";
import {thunk} from "redux-thunk";
import { authReducer } from "./Auth/auth.reducer";
import { productReducer } from "./Product/product.reducer";

// Combine reducers
const rootReducers = combineReducers({
  auth: authReducer,
  product: productReducer
});

// Set up Redux DevTools extension or fallback to a no-op function
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the store by composing middleware and devtools
export const store = legacy_createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk)) // Compose middleware and DevTools together
);
