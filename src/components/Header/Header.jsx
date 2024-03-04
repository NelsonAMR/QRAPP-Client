import logo from "../../assets/logo.png";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          <img src={logo} alt="UTNC logo" />
        </div>

        <Navigation />
      </div>
    </div>
  );
}

export default Header;
