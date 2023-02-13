import { ADD_USER } from "./actionTypes";

const initState = {
  username: "",
};
export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_USER: {
      return {
        username: payload,
      };
    }
    default: {
      return state;
    }
  }
};
