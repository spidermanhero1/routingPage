import React from 'react';
import styles from './Home.module.css';
import steamIcon from '../../assets/steam.svg'; 
// Это наш легкий 1080p файл для всех обычных пользователей
import promoVideo from '../../assets/tizer-fixed.mp4';
import { useLanguage } from '../../context/LanguageContext';
import { STEAM } from '../../data/steam';

const Home = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.heroSection}>
      
      {/* Фоновое видео */}
      <video 
        className={styles.mediaAsset} 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        {/* 1. 4K версия для больших мониторов (2560px и шире). 
            Браузер прочитает это условие и скачает файл ТОЛЬКО если экран подходит.
            Сам файл потом просто закинешь в папку public/ и назовешь tizer-4k.mp4 */}
        <source src="/tizer-4k.mp4" type="video/mp4" media="(min-width: 2560px)" />
        
        {/* 2. Стандартная 1080p версия для ноутбуков, планшетов и телефонов */}
        <source src={promoVideo} type="video/mp4" />
      </video> 
     
      {/* Контент поверх видео */}
      <div className={styles.heroContent}>
        <h1 className={styles.title}>TALES of WEAK PEOPLE</h1>
        <p className={styles.subtitle}>{t('home.subtitle')}</p>
        
        {/* Кнопка Steam */}
        <a href={STEAM.steam} target="_blank" rel="noreferrer" className={styles.steamButton}>
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