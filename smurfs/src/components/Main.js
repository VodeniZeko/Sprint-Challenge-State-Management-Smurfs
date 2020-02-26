import React from "react";
import { connect } from "react-redux";
import { getData, deleteData } from "../actions";

const Main = props => {
  console.log(props);
  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };
  const handleDelete = id => {
    props.deleteData(id);
  };
  // console.log(handleDelete);
  return (
    <div>
      <button onClick={handleGetData}>hit me</button>
      <div>
        {!props.error ? (
          props.loading ? (
            <p>loading...</p>
          ) : (
            props.smurfs.map(lilGuy => (
              <div className="box">
                <h1>name:{lilGuy.name}</h1>
                <h1>age:{lilGuy.age}</h1>
                <h1>height:{lilGuy.height}</h1>
                <button onClick={() => handleDelete(lilGuy.id)}>delete</button>
              </div>
            ))
          )
        ) : (
          <div>{props.error}</div>
        )}
      </div>
    </div>
  );
};

const MSTP = state => {
  // console.log(state);
  return {
    smurfs: state.smurfs,
    loading: state.loading,
    error: state.err
  };
};

export default connect(MSTP, { getData, deleteData })(Main);
