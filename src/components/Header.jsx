import { Link } from "react-router-dom";
// Import img
import Logo from "../assets/img/vinted-logo.png";

const Header = () => {
  return (
    <header>
      <div className="firstHead container">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <input type="search" placeholder="Recherche des articles" />
        <div>
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
          <Link to="/login">
            <button>Se connecter</button>
          </Link>
        </div>
        <button>Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
