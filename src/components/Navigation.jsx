import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <header>
      <div className="logo">Game 21</div>
      <nav>
        <ul>
          <li>
            <Link className="nav_link" to="/">
              Wallet
            </Link>
          </li>
          <li>
            <Link className="nav_link" to="/NewGame">
              Start a new Game
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export { Navigation };
