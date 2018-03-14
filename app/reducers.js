import { SET_SESSION } from "./actions";

const initialState = {
  isLoggedIn: false,
  session: null,
};

export default (state = initialState, { type, session }) => {
  switch (type) {
    case SET_SESSION:
      return { ...state, session, isLoggedIn: true };
    default:
      return state;
  }
};
