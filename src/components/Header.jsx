// Header.jsx

import styles from "../styles/Header.module.css";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/src/assets/Logo.png" alt="" className={styles.imgLogo} />
      </div>
      <nav className={styles.nav}>
        <a className={styles.btnLink} href="#home">
          Головна
        </a>
        <a className={styles.btnLink} href="#projects">
          Проекти
        </a>
        <a className={styles.btnLink} href="#contact">
          Контакти
        </a>
      </nav>
      <BurgerMenu /> {/* Додаємо бургер-меню */}
    </header>
  );
};

export default Header;
