import {
  GET_SMURF,
  GETTING_SMURF,
  POST_SMURF,
  POSTING_SMURF,
  DELETE_SMURF,
  DELETING_SMURF,
  SET_ERROR
} from "../actions/";

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
        loading: false,
        smurfs: action.payload
      };
    case POSTING_SMURF:
      return {
        ...state,
        loading: true,
        smurfs: action.payload
      };
    case POST_SMURF:
      return {
        ...state,
        loading: false,
        smurfs: action.payload
      };
    case DELETING_SMURF:
      return {
        ...state,
        loading: true,
        smurfs: action.payload
      };
    case DELETE_SMURF:
      return {
        ...state,
        loading: false,
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
