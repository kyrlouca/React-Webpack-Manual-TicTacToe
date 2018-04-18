import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import Square from '../Square/SquareF.jsx'; // eslint-disable-line no-unused-vars
import styles from './Grid.css';
class Grid extends Component {
  constructor(props) {
    super(props);
    this.players = new Map([['R', { color: 'Red' }], ['B', { color: 'Blue' }]]);
    this.state = {
      gameCount: this.props.gameCount,
      player: 'R',
      gridArray: Array(9).fill('')
    };
    this.upClick = this.upClick.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.gameCount === prevState.gameCount) {
      return null;
    }
    return {
      gameCount: prevState.gameCount,
      player: 'R',
      gridArray: Array(9).fill('')
    };
  }

  initGrid() {
    this.setState({
      gameCount: this.props.gameCount,
      player: 'R',
      gridArray: Array(9).fill('')
    });
  }

  squareClick(e, index) {
    //injected into Squares
    //and triggred from there to pass their index
    if (this.state.gridArray[index]) {
      return;
    }
    let newPlayer = this.state.player === 'R' ? 'B' : 'R';
    let newArray = [
      ...this.state.gridArray.slice(0, index),
      newPlayer,
      ...this.state.gridArray.slice(index + 1)
    ];
    this.setState({
      gameCount: this.props.gameCount,
      player: newPlayer,
      gridArray: newArray
    });
  }
  upClick(i) {
    if (this.state.gridArray[i]) {
      return;
    }
    let newPlayer = this.state.player === 'R' ? 'B' : 'R';
    let newArray = this.state.gridArray.slice();
    newArray[i] = newPlayer;

    this.setState({
      gameCount: this.props.gameCount,
      player: newPlayer,
      gridArray: newArray
    });
  }

  getSquares() {
    return this.state.gridArray.map((val, index) => {
      return (
        <Square
          key={index}
          index={index}
          val={this.state.gridArray[index]}
          fn={this.upClick}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <p>what is this</p>
        {this.props.gameCount}
        <div className={styles.gridBox}> {this.getSquares()} </div>;
      </div>
    );
  }
}

export default Grid;
