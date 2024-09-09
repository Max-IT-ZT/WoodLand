// HeroSection.jsx
import styles from "../styles/HeroSection.module.css";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 300); // Затримка для анімації
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay}></div>
      <div className={`${styles.content} ${fadeIn ? styles.fadeIn : ""}`}>
        <h2>Ласкаво просимо до світу деревʼяних виробів</h2>
        <div className={styles.blocks}>
          <div className={styles.block}>
            <h3>Про мене</h3>
            <p>
              Мене звати Андрій, я спеціалізуюся на виготовленні деревʼяних
              альтанок та дитячих майданчиків.
            </p>
          </div>
          <div className={styles.block}>
            <h3>Досвід</h3>
            <p>
              Понад 10 років досвіду у виготовленні деревʼяних виробів на
              замовлення.
            </p>
          </div>
          <div className={styles.block}>
            <h3>Наші клієнти</h3>
            <p>
              Велика база задоволених клієнтів, які оцінили якість та
              унікальність наших проектів.
            </p>
          </div>
        </div>
        <button className={styles.button}>Дізнатися більше</button>
      </div>
    </section>
  );
};

export default HeroSection;
