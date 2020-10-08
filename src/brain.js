import React from "react";
import Look from "./look";

class Brain extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this);
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
    this.clock = this.clock.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleStop = this.handleStop.bind(this);

    this.state = {
      timer: 1500,
      break: 5,
      session: 25,
      mode: true,
      text: "Session",
      mode2: true,
    };
  }
  handleReset() {
    this.setState({
      timer: 1500,
      break: 5,
      session: 25,
      mode: true,
      mode2: true,
      text: "Session",
    });
    clearInterval(this.time1);
    let sound = document.getElementById("beep");
    sound.pause();
    sound.currentTime = 0;
  }
  handleBreakDecrement() {
    var br = this.state.break;

    if (br > 1) {
      this.setState({
        break: br - 1,
      });
    }
  }
  handleSessionDecrement() {
    var br = this.state.session;
    var time = this.state.timer;
    if (br > 1) {
      this.setState({
        session: br - 1,
        timer: time - 60,
      });
    }
  }
  handleBreakIncrement() {
    var br = this.state.break;
    if (br < 60) {
      this.setState({
        break: br + 1,
      });
    }
  }
  handleSessionIncrement() {
    var br = this.state.session;
    var time = this.state.timer;
    if (br < 60) {
      this.setState({
        session: br + 1,
        timer: time + 60,
      });
    }
  }
  clock() {
    let minutes = Math.floor(this.state.timer / 60);

    let seconds = this.state.timer - minutes * 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  }

  handlePlay() {
    this.time1 = setInterval(() => {
      this.setState({
        timer: this.state.timer - 1,
      });

      if (this.state.timer === 0) {
        var sound = document.getElementById("beep");

        sound.play();

        this.state.mode2 === true
          ? this.setState({
              text: "Break",
              timer: this.state.break * 60,
              mode2: !this.state.mode2,
            })
          : this.setState({
              text: "Session",
              timer: this.state.session * 60,
              mode2: !this.state.mode2,
            });
      }
    }, 1000);

    this.setState({
      mode: false,
    });
  }
  handleStop() {
    clearInterval(this.time1);
    this.setState({
      mode: true,
    });
  }

  render() {
    return (
      <div>
        <Look
          session={this.state.session}
          break={this.state.break}
          timer={this.state.timer}
          reset={this.handleReset}
          Bdecrement={this.handleBreakDecrement}
          Sdecrement={this.handleSessionDecrement}
          Sincrement={this.handleSessionIncrement}
          Bincrement={this.handleBreakIncrement}
          time={this.clock}
          play={this.handlePlay}
          mode={this.state.mode}
          stop={this.handleStop}
          text={this.state.text}
        />
        <audio
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          id="beep"
        ></audio>
      </div>
    );
  }
}
export default Brain;
