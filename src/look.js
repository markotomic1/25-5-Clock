import React from "react";
import { BsArrowUp, BsArrowDown, BsPlay, BsPause } from "react-icons/bs";
import { VscRefresh } from "react-icons/vsc";
import "./look.css";

function Look(props) {
  return (
    <div className="container">
      <div id="title">25 + 5 Clock</div>
      <div className="break">
        <div id="break-label">Break Length</div>
        <div id="break-decrement">
          <BsArrowDown />
        </div>
        <div id="break-length">5</div>
        <div id="break-increment">
          <BsArrowUp />
        </div>
      </div>
      <div className="session">
        <div id="session-label">Session Length</div>
        <div id="session-decrement">
          <BsArrowDown />
        </div>
        <div id="session-length">25</div>
        <div id="session-increment">
          <BsArrowUp />
        </div>
      </div>
      <div id="timer">
        <div id="timer-label">Session</div>
        <div id="time-left">25:00</div>
      </div>
      <div className="buttons">
        <div id="start_stop">
          <BsPlay />
          <BsPause />
        </div>
        <div id="reset">
          <VscRefresh />
        </div>
      </div>
    </div>
  );
}
export default Look;
