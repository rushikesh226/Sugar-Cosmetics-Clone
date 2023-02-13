import { combineReducers, legacy_createStore as createStore } from "redux";
import { cartReducer } from "./cartReducer";
import { wishlistReducer } from "./wishlistReducer";
import { userReducer } from "./userReducer";
const combined_reducers = combineReducers({
  cartReducer,
  wishlistReducer,
  userReducer
});

const store = createStore(
  combined_reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
