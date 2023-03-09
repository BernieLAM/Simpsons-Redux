//----- reducer: keep the function(action)
// import { initialState } from "./initialState";
import { GET_API_DATA, ON_DELETE } from "./types";

export function reducer(state, action) {
  switch (action.type) {
    case GET_API_DATA: {
      // const _state = { ...state };
      // _state.simpsons = action.payload;

      // return _state;
      return { ...state, simpsons: action.payload };
    }

    // case ON_DELETE: {
    //   const index = state.simpsons.findIndex(
    //     (item) => item.quote === action.payload
    //   );
    //   //   const _state = { ...state }; //----- can't use this one, just spread the part we use, not the whole thing
    //   const _simpsons = [...state];
    //   //   _state.splice(index, 1); //----- can't use it
    //   _simpsons.splice(index, 1);

    //   return { ...state, simpsons: _simpsons }; //----- old state
    // }

    default:
      console.log("Reducer type not known, probably a typo");
      return state;
  }
} //----- this function is you give two things or more, it turns to one thing
