import { Link } from "react-router-dom";

// Import img
import Logo from "../assets/img/vinted-logo.png";
import Icon from "../assets/img/glass-icon.png";

const Header = ({ token, search, setSearch, setToken }) => {
  return (
    <header>
      <div className="firstHead container">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="searchBar">
          <img src={Icon} alt="" />

          <input
            type="search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            placeholder="Recherche des articles"
          />
        </div>

        {token ? (
          <button
            className="logoutButton"
            onClick={() => {
              setToken(null);
            }}
          >
            Se déconnecter
          </button>
        ) : (
          <div>
            <Link to="/signup">
              <button className="signupLoginButton">S'inscrire</button>
            </Link>
            <Link to="/login">
              <button className="signupLoginButton">Se connecter</button>
            </Link>
          </div>
        )}
        {token ? (
          <Link to="/publish">
            <button>Vends tes articles</button>
          </Link>
        ) : (
          <Link to="/login">
            <button>Vends tes articles</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
