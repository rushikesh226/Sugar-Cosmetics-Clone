import { cartReducer } from "./cartReducer";
import { wishlistReducer } from "./wishlistReducer";

const combined_reducers = combined_reducers({
    cartReducer,
    wishlistReducer,
});

const store = createStore(combined_reducers);

export { store };
