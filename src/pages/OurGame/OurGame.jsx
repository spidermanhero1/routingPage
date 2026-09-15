import React from 'react';
import { Link } from 'react-router'
import styles from './OurGame.module.css';

const OurGame = () => {
  return (
    <div className={styles.container}>
      
      <h1 className={styles.pageTitle}>Наши Проекты</h1>

      {/* ПРОЕКТ 1: Постер СЛЕВА, Текст СПРАВА */}
      <div className={styles.card}>
        {/* Постер */}
        <div className={styles.poster}>
          Постер TALES of WEAK PEOPLE
        </div>
        
        {/* Описание */}
        <div className={styles.content}>
          <span className={`${styles.tag} ${styles.tagGold}`}>
            В разработке
          </span>
          <h2 className={styles.cardTitle}>TALES of WEAK PEOPLE</h2>
          <p className={styles.description}>
            Мрачная история о выживании, где каждый выбор имеет цену. Исследуйте безжалостный мир и найдите свой путь во тьме.
          </p>
          <Link to="/games/tales" className={styles.button}>
            Узнать больше
          </Link>
        </div>
      </div>

      {/* ПРОЕКТ 2: Текст СЛЕВА, Постер СПРАВА */}
      <div className={styles.card}>
        {/* Описание (используем order: 1 на десктопе, чтобы сместить влево) */}
        <div className={styles.content} style={{ order: 1 }}>
          <span className={`${styles.tag} ${styles.tagBlue}`}>
            Концепт
          </span>
          <h2 className={styles.cardTitle}>Project: UNKNOWN</h2>
          <p className={styles.description}>
            Секретный проект студии. Кооперативный шутер нового поколения с уникальной механикой взаимодействия среды.
          </p>
          <Link to="/games/project-unknown" className={`${styles.button} ${styles.buttonGhost}`}>
            Скоро...
          </Link>
        </div>

        {/* Постер (используем order: 2 на десктопе, чтобы сместить вправо) */}
        <div className={styles.poster} style={{ order: 2 }}>
          Секретный постер
        </div>
      </div>

    </div>
  );
};

export default OurGame;