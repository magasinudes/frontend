import { SET_USER } from "../actions/user";

const user = (state = {}, action = {}) => {
  switch (action.type) {
    case SET_USER:
      if (action.user === null) {
        return null;
      } else {
        return { ...action.user };
      }
    default:
      return state;
  }
};

export default user;
