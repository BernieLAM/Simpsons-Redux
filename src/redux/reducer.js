import { initialState } from "./initialState";

export function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      //----- some logic to update the state
      return;

    default:
      return state;
  }
} //----- this function is you give two things or more, it turns to one thing
