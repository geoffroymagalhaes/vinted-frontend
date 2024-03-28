// Import img
import Logo from "../assets/img/vinted-logo.png";

const Header = () => {
  return (
    <header>
      <div className="firstHead container">
        <img src={Logo} alt="" />
        <input type="search" placeholder="Recherche des articles" />
        <div>
          <button>S'inscrire</button>
          <button>Se connecter</button>
        </div>
        <button>Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
