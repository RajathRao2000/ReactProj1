import React from "react";
import styles from "./input.module.css"
const Input = (props) => {
  return (
    <>
      <label className={styles.label} htmlFor={props.id}>{props.label}</label>
      <input className={styles.input} type={props.type} id={props.id} required></input>
    </>
  );
};

export default Input;
