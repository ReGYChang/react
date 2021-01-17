import React from "react";
import Board from "./Board";
import { calculateWinner } from "../utils/utils";
import _ from "lodash";
import { connect } from "react-redux";

class Game extends React.Component {
  render() {
    const { hasWinner, winner, next } = this.props;

    const status = hasWinner ? `Winner: ${winner}` : `Next player: ${next}`;

    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{status}</div>
        </div>
      </div>
    );
  }
}
function selector(state) {
  const winner = calculateWinner(state.squares);
  return {
    winner,
    hasWinner: winner !== null,
    next: state.xIsNext ? "X" : "O"
  };
}
export default connect(selector)(Game);
