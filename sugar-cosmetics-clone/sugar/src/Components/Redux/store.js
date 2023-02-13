import { combineReducers, legacy_createStore as createStore } from "redux";
import { cartReducer } from "./cartReducer";
import { wishlistReducer } from "./wishlistReducer";

const combined_reducers = combineReducers({
  cartReducer,
  wishlistReducer,
});

const store = createStore(
  combined_reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
