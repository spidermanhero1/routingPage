import React from 'react';
import styles from './Home.module.css';
import promoVideo from '../../assets/tizer.mp4'; // Импортируем видео

const Home = () => {
  return (
    <section className={styles.heroSection}>
      <video className={styles.mediaAsset} autoPlay loop muted playsInline>
        <source src={promoVideo} type="video/mp4" />
      </video> 
     

      <div className={styles.heroContent}>
        <h1 className={styles.title}>TALES of WEAK PEOPLE</h1>
        <p className={styles.subtitle}>GSC STYLE PORTFOLIO</p>
      </div>
    </section>
  );
};

export default Home;