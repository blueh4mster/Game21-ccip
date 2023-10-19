import React, { useState, createContext, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import { chainSelectorMap, contractAddress } from "./constants";
function Game(props) {
  // const {
  //   destinationChain,
  //   setDestinationChain,
  //   text,
  //   setText,
  //   sessionId,
  //   setSessionId,
  //   currentNumber,
  //   setCurrentNumber,
  //   playerNumber,
  //   setPlayerNumber,
  // } = useContext(AppContext);
  // const { contract, account } = props.state;

  // move function
  // const move = async () => {
  //   console.log(currentNumber);
  //   if (sessionId) {
  //     setText("communicating your move");
  //     try {
  //       const tx = await contract.methods
  //         .move(
  //           playerNumber,
  //           sessionId,
  //           currentNumber,
  //           chainSelectorMap[destinationChain],
  //           contractAddress[destinationChain]
  //         )
  //         .send({ from: `${account}` });
  //       console.log(tx);
  //       setText(`player ${playerNumber} : ${currentNumber}`);
  //       if (playerNumber == 1) {
  //         setPlayerNumber(2);
  //       } else {
  //         setPlayerNumber(1);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //       return;
  //     }
  //   }
  // };

  // checkWin function
  function checkWin() {
  }

  // getNextPlayer function
  function getNextPlayer(boardStatus) {
    // Determines which player's turn is next based on the current board state
  }

  // Render Home component
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
export { Game };
