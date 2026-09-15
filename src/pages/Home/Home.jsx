import React from 'react';
import styles from './Home.module.css';
import promoVideo from '../../assets/tizer.mp4';
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
        <p className={styles.subtitle}>Независимая студия разработки</p>
        
        {/* Кнопка Steam (пока с заглушкой #) */}
        <a href="#" target="_blank" rel="noreferrer" className={styles.steamButton}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 496 512" 
            width="24" 
            height="24" 
            fill="currentColor" 
            style={{ flexShrink: 0 }}
          >
            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm64.9 207.2c-23.8 0-44.5 14.2-53.3 34.6l-50.6-21.9c-1.3-7.6-7.9-13.3-15.8-13.3-8.8 0-16 7.2-16 16s7.2 16 16 16c2.8 0 5.3-.7 7.6-1.9l38.2 46.1c-4.5 9.1-7.1 19.3-7.1 30.1 0 38.6 31.4 70 70 70s70-31.4 70-70-31.4-70-70-70zm-64.1 98.7c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24zm71.1-67.6c-17.7 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z" />
          </svg>
          {t('home.wishlist')}
        </a>
      </div>
    </section>
  );
};

export default Home;