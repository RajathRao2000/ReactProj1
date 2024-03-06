import React from "react";

const Input = (props) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} required></input>
    </>
  );
};

export default Input;
