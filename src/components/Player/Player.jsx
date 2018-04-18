import React from 'react'; // eslint-disable-line no-unused-vars
import style from './Player.css';
const Player = props => {
  return <div className={style.box}>{props.val}</div>;
};
export default Player;
