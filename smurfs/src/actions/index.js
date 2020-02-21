import axios from "axios";

export const GETTING_SMURF = "getting-smurf";
export const GET_SMURF = "get-smurf";
export const SET_ERROR = "error-message";
//
export const POST_SMURF = "post-smurf";
//

export const getData = () => dispatch => {
  dispatch({ type: GETTING_SMURF });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      // console.log(res);
      dispatch({ type: GET_SMURF, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SET_ERROR, payload: "something went wrong" });
    });
};

export const postData = newSmurf => dispatch => {
  dispatch({ type: POST_SMURF });

  //just because we want to se a spinner
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      console.log("posting", res);
      dispatch({ type: POST_SMURF, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SET_ERROR, payload: "something went wrong" });
    });
};
