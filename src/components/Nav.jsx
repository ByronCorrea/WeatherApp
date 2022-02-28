import styles from "./styles/Nav.module.css";
import Logo from "../assets/Logo Pagina.png";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className={styles.nav}>
      <Link className={styles.brand} to="/">
        <img src={Logo} width="30" height="30" alt="Logo" />
      </Link>

      <SearchBar onSearch={onSearch} />

      <Link className={styles.about} to="/about">
        About
      </Link>
    </nav>
  );
}

export default Nav;
