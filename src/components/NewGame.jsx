import React, { useContext } from "react";
import { useState } from "react";
import { ABI } from "../abi/ABI.json";
import Web3 from "web3";
import {
  chainSelectorMap,
  getDestinationChain,
  contractAddress,
} from "./constants";
import { useNavigate } from "react-router-dom";
const NewGame = (props) => {
  const navigateTo = useNavigate();
  const { contract, account, chain_id } = props.state;
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
  const [text, setText] = useState();
  const [currentNumber, setCurrentNumber] = useState();
  const [playerNumber, setPlayerNumber] = useState();
  var sessionId = "";

  const newGame = async () => {
    //yet to set sessionId
    console.log(chain_id);
    const chainName = getDestinationChain(chain_id);
    console.log(chainName);
    let destinationChain = chainName;
    console.log(destinationChain);
    setText("Starting the Game");
    try {
      const startGame = await contract.methods
        .start(
          chainSelectorMap[destinationChain],
          contractAddress[destinationChain]
        )
        .send({ from: `${account}` });

      setCurrentNumber(0);
      setPlayerNumber(1);
      console.log("hello");
      setText(
        "Game Started, Waiting for the other player on " +
          destinationChain +
          " to join."
      );
      console.log(startGame);
      navigateTo("/Game");
    } catch (e) {
      console.log(e);
      return;
    }
  };
  const join = async (props) => {
    console.log("hello");
    // const tmp = await contract.methods
    //   .getSessionId()
    //   .call({ from: `${account}` });
    // sessionId = tmp;
    console.log(sessionId);
    setText("Joining");

    const player1 = await contract.methods
      .getPlayer1(sessionId)
      .call({ from: `${account}` });
    const player2 = await contract.methods
      .getPlayer2(sessionId)
      .call({ from: `${account}` });
    const zero = "0x0000000000000000000000000000000000000000";
    console.log(player1);
    console.log(player2);

    if (account == player1) {
      setPlayerNumber(1);
      if (player2 == zero) {
        setText("Rejoined as Player 1");
      }
    } else if (account == player2 || player2 == zero) {
      setPlayerNumber(2);
    }
    setPlayerNumber(2);

    setText("Joined the game. Refreshing the board!");
    navigateTo("/Game");
  };
  return (
    <>
      <button onClick={newGame}>start new game</button>
      <button onClick={join}>Join</button>
      <h3 style={{ textAlign: "center", fontSize: "10px" }}>
        {text ? text : ""}
      </h3>
    </>
  );
};

export { NewGame };
