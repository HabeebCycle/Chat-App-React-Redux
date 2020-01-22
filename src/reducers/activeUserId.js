import { SET_ACTIVE_USER_ID } from "../constants/action-types";

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_USER_ID:
      return action.payload;
    default:
      return state;
  }
};
