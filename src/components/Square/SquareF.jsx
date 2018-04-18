import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import style from './Square.css';
function Square(props) {
  return <div className={style.box} onClick={()=>props.fn(props.index)}>{props.val}  </div>;
}
export default Square;
