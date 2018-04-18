import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import styles from './Board.css';
import Grid from '../Grid/Grid.jsx';// eslint-disable-line no-unused-vars
import Player from '../Player/Player.jsx';// eslint-disable-line no-unused-vars
import treeIcon from '../../image/tree2.png';
class Board extends Component {
  constructor() {
    super();
    this.state = {gameCount:0};
    this.start= this.startOver.bind(this);
  }
  startOver(){
    let cnt=this.state.gameCount+1;
    this.setState({gameCount : cnt});
  }

  render() {
    let wrap = classNames(styles.wrapper);
    return (
      <div>
        <div className={wrap}>
          <header className={styles.header}>
            <div className={styles.title}>Tic-Tac-Toe</div>
          </header>
          <aside> Aside1 XF and me section </aside>
          <div className={styles.main}>
            <img src={treeIcon} />
            <Player className="player" val="h2ello" />
            <Grid gameCount={this.state.gameCount}/>
          </div>
          <footer className={styles.footer}>
            <div className={styles.button}>
              <button id="btn1" onClick={this.start}>StartOver</button>
            </div>

            <div className={styles.message}>
              <p id='mm' className={styles.mm}>
                what fa
              </p>
            </div>
          </footer>
          <p className={classNames(styles.mm, styles.xx)}>below</p>
        </div>
      </div>
    );
  }
}
export default Board;
