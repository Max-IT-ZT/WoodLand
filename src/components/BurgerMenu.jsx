// BurgerMenu.jsx
import styles from "../styles/BurgerMenu.module.css";
import { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <button onClick={toggleMenu}>☰</button>
      {isOpen && (
        <div className={styles.menu}>
          <a href="#home" onClick={toggleMenu}>
            Головна
          </a>
          <a href="#projects" onClick={toggleMenu}>
            Проекти
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Контакти
          </a>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
