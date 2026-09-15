import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      
      <h1 className={styles.title}>
        About TALES of WEAK PEOPLE
      </h1>

      <div className={styles.divider} />

      {/* Блок статистики */}
      <div className={styles.statsRow}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Founded</span>
          <span className={styles.statValue}>5 июня 2026</span>
        </div>
        
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Headquarter</span>
          <span className={styles.statValue}>Планета Земля</span>
        </div>
      </div>

      <div className={styles.divider} />

      {/* Текстовый блок */}
      <div className={styles.textRow}>
        
        {/* Левая колонка */}
        <div className={styles.textColumn}>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p className={`${styles.paragraph} ${styles.italic}`}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className={`${styles.paragraph} ${styles.italic}`}>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
          </p>
        </div>

        {/* Правая колонка */}
        <div className={styles.textColumn}>
          <p className={`${styles.paragraph} ${styles.italic}`}>
            Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.
          </p>
          <p className={`${styles.paragraph} ${styles.italic}`}>
            Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Aliquam id diam maecenas ultricies mi eget mauris.
          </p>
          <p className={`${styles.paragraph} ${styles.accent}`}>
            For us, games have never been just entertainment - they are emotions, memories, and living worlds that bring millions of players together across generations. (Lorem ipsum dolor sit amet).
          </p>
        </div>
        
      </div>
      
    </div>
  );
};

export default About;