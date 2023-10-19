import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Wallet } from "./components/Wallet";
import { NewGame } from "./components/NewGame";
import { Game } from "./components/Game";
function App() {
  const [state, setState] = useState({
    web3: null,
    contract: null,
    account: null,
    chain_id: null,
  });
  //const [taskList, setTaskList] = useState(null);
  const saveState = ({ web3, account, contract, chain_id }) => {
    setState({
      web3: web3,
      account: account,
      contract: contract,
      chain_id: chain_id,
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Wallet saveState={saveState} />,
    },
    {
      path: "/NewGame",
      element: <NewGame state={state} />,
    },
    {
      path: "/Game",
      element: <Game state={state} />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
