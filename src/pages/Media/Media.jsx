import React, { useState, useRef, useEffect } from 'react';
import styles from './Media.module.css';
import { useLanguage } from '../../context/LanguageContext';

// Импорты картинок
import screen1 from './../../assets/prScr1.png';
import screen2 from './../../assets/herScr.png';
import screen3 from './../../assets/homeScr.png';
import screen4 from './../../assets/trashScr.png';
import screen5 from './../../assets/tankScr.png';

const Media = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('1');

  // Разделяем стейты логически: Loc (Локации) и Char (Персонажи)
  const [activeSlideIndexLoc, setActiveSlideIndexLoc] = useState(0);
  const [activeSlideIndexChar, setActiveSlideIndexChar] = useState(0);

  const carouselRefLoc = useRef(null);
  const carouselRefChar = useRef(null);

  // Массивы картинок
  const locationsImages = [screen3, screen4, screen5]; // Локации
  const charactersImages = [screen1, screen2];         // Персонажи

  const slidesCountLoc = locationsImages.length;
  const slidesCountChar = charactersImages.length;

  useEffect(() => {
    if (activeTab === '1') {
      const observerCallback = (entries, observerSetState) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            observerSetState(index);
          }
        });
      };

      const observerLoc = new IntersectionObserver(
        (entries) => observerCallback(entries, setActiveSlideIndexLoc),
        { threshold: 0.5 }
      );
      if (carouselRefLoc.current) {
        Array.from(carouselRefLoc.current.children).forEach(child => observerLoc.observe(child));
      }

      const observerChar = new IntersectionObserver(
        (entries) => observerCallback(entries, setActiveSlideIndexChar),
        { threshold: 0.5 }
      );
      if (carouselRefChar.current) {
        Array.from(carouselRefChar.current.children).forEach(child => observerChar.observe(child));
      }

      return () => {
        observerLoc.disconnect();
        observerChar.disconnect();
      };
    }
  }, [activeTab, slidesCountLoc, slidesCountChar]);

  const scrollCarousel = (ref, index) => {
    if (ref.current && ref.current.children[index]) {
      ref.current.children[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  const tabs = [
    { id: '1', label: 'TALES of WEAK PEOPLE' },
  ];

  return (
    <div className={styles.container}>
      
      <div className={styles.tabsHeader}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === '1' && (
        <div className={styles.tabContent}>
          
          <div className={styles.trailerSection}>
            <div className={styles.mainPlayer}>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className={styles.trailerList}>
              <div className={`${styles.trailerItem} ${styles.active}`}>
                Teaser Trailer - Coming 2027
              </div>
              <div className={styles.trailerItem}>
                Coming soon
              </div>
            </div>
          </div>

          {/* БЛОК 1: ЛОКАЦИИ (Пейзажный формат, Текст слева, Карусель справа) */}
          <div className={styles.zigzagBlock}>
            <div className={styles.textContent}>
              <h2 className={styles.blockTitle}>{t('media.locationsTitle')}</h2>
              <p className={styles.blockDesc}>
                {t('media.locationsDesc')}
              </p>
            </div>
            
            <div className={styles.carouselWrapper}>
              <button
                className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
                onClick={() => scrollCarousel(carouselRefLoc, activeSlideIndexLoc === 0 ? slidesCountLoc - 1 : activeSlideIndexLoc - 1)}
              >
                <span className={styles.carouselIcon}>&larr;</span>
              </button>
              
              <div className={styles.carousel} ref={carouselRefLoc}>
                {locationsImages.map((imgSrc, index) => (
                  <div className={styles.slide} data-index={index} key={index}>
                    <img src={imgSrc} alt={`Локация ${index + 1}`} />
                  </div>
                ))}
              </div>

              <button
                className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
                onClick={() => scrollCarousel(carouselRefLoc, activeSlideIndexLoc === slidesCountLoc - 1 ? 0 : activeSlideIndexLoc + 1)}
              >
                <span className={styles.carouselIcon}>&rarr;</span>
              </button>
            </div>
          </div>

          {/* БЛОК 2: ПЕРСОНАЖИ (Портретный формат, Карусель слева, Текст справа) */}
          <div className={styles.zigzagBlock}>
            
            {/* Добавлен класс portraitWrapper для изменения пропорций */}
            <div className={`${styles.carouselWrapper} ${styles.portraitWrapper}`}>
              <button
                className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
                onClick={() => scrollCarousel(carouselRefChar, activeSlideIndexChar === 0 ? slidesCountChar - 1 : activeSlideIndexChar - 1)}
              >
                <span className={styles.carouselIcon}>&larr;</span>
              </button>
              
              <div className={styles.carousel} ref={carouselRefChar}>
                {charactersImages.map((imgSrc, index) => (
                  <div className={styles.slide} data-index={index} key={index}>
                    <img src={imgSrc} alt={`Персонаж ${index + 1}`} />
                  </div>
                ))}
              </div>

              <button
                className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
                onClick={() => scrollCarousel(carouselRefChar, activeSlideIndexChar === slidesCountChar - 1 ? 0 : activeSlideIndexChar + 1)}
              >
                <span className={styles.carouselIcon}>&rarr;</span>
              </button>
            </div>

            <div className={styles.textContent}>
              <h2 className={styles.blockTitle}>{t('media.charactersTitle')}</h2>
              <p className={styles.blockDesc}>
                {t('media.charactersDesc')}
              </p>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

export default Media;