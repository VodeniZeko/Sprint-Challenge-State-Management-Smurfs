import { GET_SMURF, GETTING_SMURF, SET_ERROR } from "../actions/";

const initState = {
  smurfs: [],
  loading: false,
  err: ""
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case GETTING_SMURF:
      return {
        ...state,
        loading: true
      };
    case GET_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case SET_ERROR:
      return {
        ...state,
        err: action.payload
      };
    default:
      return state;
  }
};
