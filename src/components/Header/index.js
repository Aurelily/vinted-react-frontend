import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src="/logo-vinted.png" alt="Logo Vinted" />
      <input type="text" />
      <div className="buttons">
        <div>
          <button>S'inscrire</button>
          <button>Se connecter</button>
        </div>
        <button>Vends tes articles</button>
      </div>
    </div>
  );
};
export default Header;

// Header avec logo + Input search + bt s'incrire + bt se connecter + bt
//       vends tes articles
