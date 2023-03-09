//----- reducer: keep the function(action)
import { initialState } from "./initialState";
import {
  GET_API_DATA,
  ON_DELETE,
  ON_SORT_A_TO_Z,
  ON_SORT_Z_TO_A,
  ON_LIKE,
} from "./types";

//----- this function is you give two things or more, it turns to one thing
//----- state = initialState IMPORTANT! don't miss this, have to define state first
export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_API_DATA: {
      // const _state = { ...state };
      // _state.simpsons = action.payload;
      // return _state;
      return { ...state, simpsons: action.payload }; //----- if not changing anything can write like that
    }

    case ON_DELETE: {
      const index = state.simpsons.findIndex(
        (item) => item.quote === action.payload
      );

      const _simpsons = [...state.simpsons]; //----- const _state = { ...state }; // can't use this one, just spread the part we use, not the whole thing
      _simpsons.splice(index, 1); //   _state.splice(index, 1); // can't use it

      return { ...state, simpsons: _simpsons }; //----- old state
    }

    case ON_SORT_A_TO_Z: {
      const _simpsons = [...state.simpsons];
      _simpsons.sort((item, nextItem) => {
        if (item.character < nextItem.character) return -1;
        if (item.character > nextItem.character) return 1;
        return 0;
      });
      return { ...state, simpsons: _simpsons };
    }

    case ON_SORT_Z_TO_A: {
      const _simpsons = [...state.simpsons];
      _simpsons.sort((item, nextItem) => {
        if (item.character < nextItem.character) return 1;
        if (item.character > nextItem.character) return -1;
        return 0;
      });

      return { ...state, simpsons: _simpsons };
    }

    case ON_LIKE: {
      const index = state.simpsons.findIndex(
        (item) => item.quote === action.payload
      );

      const _simpsons = [...state.simpsons];
      _simpsons[index].like = !_simpsons[index].like; //----- make it opposite, can like or dislike

      return { ...state, simpsons: _simpsons }; //----- old state
    }

    default:
      console.log("Reducer type not known, probably a typo");
      return state;
  }
}
