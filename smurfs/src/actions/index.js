import axios from "axios";

export const GETTING_SMURF = "getting-smurf";
export const GET_SMURF = "get-smurf";
export const SET_ERROR = "error-message";
//
export const POST_SMURF = "post-smurf";
export const POSTING_SMURF = "posting-smurf";
//
export const DELETE_SMURF = "delete-smurf";
export const DELETING_SMURF = "deleting-smurf";

export const getData = () => dispatch => {
  dispatch({ type: GETTING_SMURF });
  setTimeout(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        // console.log(res);
        dispatch({ type: GET_SMURF, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: SET_ERROR, payload: "something went wrong" });
      });
  }, 1000);
};

export const postData = newSmurf => dispatch => {
  dispatch({ type: POSTING_SMURF });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      // console.log("posting", res);
      dispatch({ type: POST_SMURF, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SET_ERROR, payload: "something went wrong" });
    });
};

export const deleteData = id => dispatch => {
  dispatch({ type: DELETING_SMURF });
  axios
    .delete(`"http://localhost:3333/smurfs", ${id}`)
    .then(res => {
      console.log("deleting", res);
      dispatch({ type: DELETE_SMURF, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SET_ERROR, payload: "something went wrong" });
    });
};
