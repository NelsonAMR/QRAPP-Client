import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link to="/">Registro</Link>
      <Link to="/register-employee">Registrar Empleado</Link>
    </nav>
  );
}

export default Navigation;
