import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: 0,
    color: "#" + Math.floor(Math.random() * 167772).toString(16)
  };

  componentDidMount() {
    this.handleAddTimer();
  }

  componentWillUnmount() {
    this.stopClock();
  }

  handleAddTimer = () => {
    this.interval = setInterval(this.clockTick, 1000);
  };

  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  };

  stopClock = () => {
    clearInterval(this.interval);
  };

  handleClose = () => {
    this.props.onRemove(this.props.id);
  };

  render() {
    const { time, color } = this.state;
    return (
      <section className="timer" style={{ background: color }}>
        <h1>{time}</h1>
        <button onClick={this.stopClock}>Stop</button>
        <aside className="mounttext">Mounted</aside>
        <small onClick={this.handleClose}>X</small>
      </section>
    );
  }
}

export default Timer;
