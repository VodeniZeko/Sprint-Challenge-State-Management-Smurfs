import React from "react";

const Main = props => {
  console.log(props);
  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };
  return (
    <div>
      <button onClick={handleGetData}>hit me</button>
      {props.smurfs.map(lilGuy => (
        <div>
          <h1>{lilGuy.name}</h1>
          <h1>{lilGuy.age}</h1>
          <h1>{lilGuy.height}</h1>
        </div>
      ))}
    </div>
  );
};

export default Main;
