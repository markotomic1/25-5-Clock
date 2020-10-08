import React from "react";
import { BsArrowUp, BsArrowDown, BsPlay, BsPause } from "react-icons/bs";
import { VscRefresh } from "react-icons/vsc";
import "./look.css";

class Look extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div id="title">25 + 5 Clock</div>
        <div className="break">
          <div id="break-label">Break Length</div>
          <div id="break-decrement" onClick={this.props.Bdecrement}>
            <BsArrowDown size={25} />
          </div>
          <div id="break-length">{this.props.break}</div>
          <div id="break-increment" onClick={this.props.Bincrement}>
            <BsArrowUp size={25} />
          </div>
        </div>
        <div className="session">
          <div id="session-label">Session Length</div>
          <div id="session-decrement" onClick={this.props.Sdecrement}>
            <BsArrowDown size={25} />
          </div>
          <div id="session-length">{this.props.session}</div>
          <div id="session-increment" onClick={this.props.Sincrement}>
            <BsArrowUp size={25} />
          </div>
        </div>
        <div className="timer">
          <div id="timer-label">{this.props.text}</div>
          <div id="time-left">{this.props.time()}</div>
        </div>
        <div className="buttons">
          <div
            id="start_stop"
            onClick={
              this.props.mode === true ? this.props.play : this.props.stop
            }
          >
            {this.props.mode === true ? (
              <BsPlay size={25} />
            ) : (
              <BsPause size={25} />
            )}
          </div>
          <div id="reset" onClick={this.props.reset}>
            <VscRefresh size={25} />
          </div>
        </div>
      </div>
    );
  }
}
export default Look;
