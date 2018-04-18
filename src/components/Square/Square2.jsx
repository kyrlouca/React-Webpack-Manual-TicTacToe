import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import style from './Square.css';
class Square2 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.index, color: props.color };
    // this.clickMa = this.clickMe.bind(this);
  }
  render() {
    return (
      <div className={style.box} onClick={e => this.props.fn( e, this.props.index)}>
        {this.props.player}
      </div>
    );
  }
}
export default Square2;
