import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  state = {
    timerIDs: []
  }

  componentDidMount() {
    this.handleAddTimer();
  }

  handleAddTimer = () => {
    const { timerIDs } = this.state;
    const newTimerID = timerIDs.length + 1;
    this.setState({ timerIDs: [...timerIDs, newTimerID] });
  }

  handleRemoveTimer = (timerID) => {
    const { timerIDs } = this.state;
    const updatedTimerIDs = timerIDs.filter(id => id !== timerID);
    this.setState({ timerIDs: updatedTimerIDs });
  }

  render() {
    const { timerIDs } = this.state;
    return (
      <div>
        <h1>Timer App</h1>
        <button onClick={this.handleAddTimer}>Add Timer</button>
        {timerIDs.map(timerID => (
          <Timer key={timerID} id={timerID} onRemove={this.handleRemoveTimer} />
        ))}
      </div>
    );
  }
}

export default App;