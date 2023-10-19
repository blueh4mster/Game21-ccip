import Web3 from "web3";
import PropTypes from "prop-types";
import ABI from "../abi/ABI.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Wallet = (props) => {
  const navigateTo = useNavigate();
  const connectWallet = async () => {
    try {
      //as metamask is inserted by this window.ethereum object
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const chain_id = await web3.eth.getChainId();
        var contractAddress = "0xDdb8fDe4E681335fE4aC632e3668Aa512D128988";
        if (chain_id == 11155111) {
          console.log(web3, accounts);
          console.log("hellp");
          console.log(chain_id);
          contractAddress = "0xDdb8fDe4E681335fE4aC632e3668Aa512D128988";
        } else if (chain_id == 80001) {
          console.log(web3, accounts);
          contractAddress = "0x40A85d3Bb39BA1a9E85afD4d425b331e6266B74D";
        }
        const contract = new web3.eth.Contract(ABI, contractAddress);
        console.log(contract);
        {
          props.saveState({
            web3: web3,
            account: accounts[0],
            contract: contract,
            chain_id: chain_id,
          });
        }
        navigateTo("/NewGame");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <button onClick={connectWallet}>Connect Wallet</button>
    </>
  );
};
Wallet.propTypes = {
  saveState: PropTypes.func.isRequired,
};

export { Wallet };
