import React from 'react';
import styles from './Home.module.css';
import steamIcon from '../../assets/steam.svg'; 
import promoVideo from '../../assets/1080(10k).mp4';

import { useLanguage } from '../../context/LanguageContext';

const Home = () => {

  const { t } = useLanguage();

  return (
    <section className={styles.heroSection}>
      {/* Фоновое видео */}
      <video className={styles.mediaAsset} autoPlay loop muted playsInline>
        <source src={promoVideo} type="video/mp4" />
      </video> 
     
      {/* Контент поверх видео */}
      <div className={styles.heroContent}>
        <h1 className={styles.title}>TALES of WEAK PEOPLE</h1>
        <p className={styles.subtitle}>{t('home.subtitle')}</p>
        
        {/* Кнопка Steam (пока с заглушкой #) */}
        <a href="#" target="_blank" rel="noreferrer" className={styles.steamButton}>
         <img 
            src={steamIcon} 
            alt="Steam" 
            style={{ width: '24px', height: '24px', flexShrink: 0 }} 
          />
          {t('home.wishlist')}
        </a>
      </div>
    </section>
  );
};

export default Home;