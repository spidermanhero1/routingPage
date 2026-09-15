import React from 'react';
import styles from './About.module.css';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      
      <h1 className={styles.title}>
        TALES of WEAK PEOPLE
      </h1>

      <div className={styles.divider} />

      {/* Блок статистики */}
      <div className={styles.statsRow}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>{t('about.foundedLabel')}</span>
          <span className={styles.statValue}>{t('about.foundedDate')}</span>
        </div>
        
        <div className={styles.statItem}>
          <span className={styles.statLabel}>{t('about.headquarterLabel')}</span>
          <span className={styles.statValue}>{t('about.headquarterValue')}</span>
        </div>
      </div>

      <div className={styles.divider} />

      {/* Текстовый блок */}
      <div className={styles.textRow}>
        
        {/* Левая колонка */}
        <div className={styles.textColumn}>
          <p className={styles.paragraph}>
            {t('about.leftCol.p1')}
          </p>
          <p className={`${styles.paragraph} ${styles.italic}`}>
            {t('about.leftCol.p2')}
          </p>
          <p className={`${styles.paragraph} ${styles.italic}`}>
            {t('about.leftCol.p3')}
          </p>
        </div>

        {/* Правая колонка */}
        <div className={styles.textColumn}>
          <p className={`${styles.paragraph} ${styles.italic}`}>
            {t('about.rightCol.p1')}
          </p>
          <p className={`${styles.paragraph} ${styles.italic}`}>
            {t('about.rightCol.p2')}
          </p>
          <p className={`${styles.paragraph} ${styles.accent}`}>
            {t('about.rightCol.quote')}
          </p>
        </div>
        
      </div>
      
    </div>
  );
};

export default About;