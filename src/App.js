import React, { Component } from "react";
import logo from "./logo.svg";
import "./assets/App.scss";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Djigo React</h1>
        </header>
        <Application players={players} />
      </div>
    );
  }
}

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired
};

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">{props.playerName}</div>
      <div className="player-score">
        <Counter />
      </div>
    </div>
  );
}

class Counter extends Component {
  static propTypes = {
    score: PropTypes.number.isRequired,
  };

  state = {
    score: 0
  };
  getInitialState(){
    return {
      score : 0,
    }
  }

  incrementScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  }

  decrementScore = () => {
    this.setState({
      score: this.state.score - 1
    });
  }

  render() {
    return (
      <div className="counter">
        <button
          className="counter-action-decrement"
          onClick={this.decrementScore}
        >
          -
        </button>
        <div className="counter-score">{this.state.score}</div>
        <button
          className="counter-action-increment"
          onClick={this.incrementScore}
        >
          +
        </button>
      </div>
    );
  }
}

function Application(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title} />
      <div className="players" />
      {props.players.map(function(player) {
        return (
          <Player
            playerName={player.name}
            score={player.score}
            key={player.id}
          />
        );
      })}
    </div>
  );
}

Application.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      score: PropTypes.number
    })
  ).isRequired
};

Application.defaultProps = {
  title: "Scoreboard"
};

Player.propTypes = {
  playerName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
};

var players = [
  {
    id: 1,
    name: "Jugador 1",
    score: 5
  },

  {
    id: 2,
    name: "Jugador 2",
    score: 2
  },

  {
    id: 3,
    name: "Jugador 3",
    score: 4
  }
];

export default App;
