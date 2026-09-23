import React, { useState, useRef, useEffect } from 'react';
import styles from './Media.module.css';
import { useLanguage } from '../../context/LanguageContext';

import { getLocations } from '../../data/locationsData';
import { getCharacters } from '../../data/charactersData';

const Media = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('1');

  const locations = getLocations(t);
  const characters = getCharacters(t);

  // --- ТОТ САМЫЙ ТРЮК ДЛЯ ЛОКАЦИЙ ---
  // Разворачиваем картинки всех зон в одну ленту
  const allLocationSlides = locations.flatMap((loc, index) =>
    loc.images.map((imgSrc) => ({
      locIndex: index, // Запоминаем, какой локации принадлежит картинка
      imgSrc: imgSrc
    }))
  );

  const [activeSlideIndexLoc, setActiveSlideIndexLoc] = useState(0);
  const [activeSlideIndexChar, setActiveSlideIndexChar] = useState(0);

  const [isLocExpanded, setIsLocExpanded] = useState(false);
  const [isCharExpanded, setIsCharExpanded] = useState(false);

  const carouselRefLoc = useRef(null);
  const carouselRefChar = useRef(null);

  // Теперь считаем общее количество картинок, а не зон
  const slidesCountLoc = allLocationSlides.length; 
  const slidesCountChar = characters.length;

  // Вычисляем, текст какой локации сейчас показывать
  const currentLocIndex = allLocationSlides[activeSlideIndexLoc]?.locIndex || 0;
  const currentLoc = locations[currentLocIndex];

  // Сбрасываем спойлер, только если сменилась сама локация (а не просто фотка внутри нее)
  useEffect(() => {
    setIsLocExpanded(false);
  }, [currentLocIndex]);

  useEffect(() => {
    setIsCharExpanded(false);
  }, [activeSlideIndexChar]);

  useEffect(() => {
    if (activeTab === '1') {
      const observerCallback = (entries, observerSetState) => {
        entries.forEach((entry) => {
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
        Array.from(carouselRefLoc.current.children).forEach((child) => observerLoc.observe(child));
      }

      const observerChar = new IntersectionObserver(
        (entries) => observerCallback(entries, setActiveSlideIndexChar),
        { threshold: 0.5 }
      );
      if (carouselRefChar.current) {
        Array.from(carouselRefChar.current.children).forEach((child) => observerChar.observe(child));
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

  const tabs = [{ id: '1', label: 'TALES OF WEAK PEOPLE' }];

  return (
    <div className={styles.container}>
      <div className={styles.tabsHeader}>
        {tabs.map((tab) => (
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
          
          {/* Блок Трейлеров */}
          <div className={styles.trailerSection}>
            <div className={styles.mainPlayer}>
              <iframe
                src="https://www.youtube.com/embed/TARUSpBisPU?si=4Hro450HPtk3Uhb2"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className={styles.trailerList}>
              <div className={`${styles.trailerItem} ${styles.active}`}>Teaser Trailer - Coming 2027</div>
              <div className={styles.trailerItem}>Coming soon</div>
            </div>
          </div>

          {/* БЛОК 1: ЛОКАЦИИ */}
          <div className={styles.sectionWrapper}>
            <h2 className={styles.sectionTitle}>{t('media.locationsTitle')}</h2>
            
            <div className={styles.zigzagBlock}>
              <div className={styles.textContent}>
                
                {/* Текст теперь опирается на currentLoc */}
                <h3 className={styles.itemTitle}>{currentLoc.title}</h3>
                <blockquote className={styles.quote}>{currentLoc.quote}</blockquote>
                <p className={styles.blockDesc}>{currentLoc.overview}</p>
                
                {isLocExpanded && (
                  <div className={styles.moreDesc}>
                    {currentLoc.moreDetails.map((detail, index) => (
                      <div key={index} className={styles.detailBlock}>
                        <h4>{detail.heading}</h4>
                        <p>{detail.text}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                <button 
                  className={styles.readMoreBtn} 
                  onClick={() => setIsLocExpanded(!isLocExpanded)}
                >
                  {isLocExpanded ? t('media.readLess') : t('media.readMore')}
                </button>
              </div>

              <div className={styles.carouselWrapper}>
                <button
                  className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
                  onClick={() => scrollCarousel(carouselRefLoc, activeSlideIndexLoc === 0 ? slidesCountLoc - 1 : activeSlideIndexLoc - 1)}
                >
                  <span className={styles.carouselIcon}>&larr;</span>
                </button>
                <div className={styles.carousel} ref={carouselRefLoc}>
                  {/* Теперь карусель рендерит все картинки из ленты allLocationSlides */}
                  {allLocationSlides.map((slide, idx) => (
                    <div className={styles.slide} data-index={idx} key={idx}>
                      <img src={slide.imgSrc} alt={`Локация слайд ${idx + 1}`} />
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
          </div>

          {/* БЛОК 2: ПЕРСОНАЖИ */}
          <div className={styles.sectionWrapper}>
            <h2 className={styles.sectionTitle}>{t('media.charactersTitle')}</h2>
            
            <div className={styles.zigzagBlock}>
              <div className={`${styles.carouselWrapper} ${styles.portraitWrapper}`}>
                <button
                  className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
                  onClick={() => scrollCarousel(carouselRefChar, activeSlideIndexChar === 0 ? slidesCountChar - 1 : activeSlideIndexChar - 1)}
                >
                  <span className={styles.carouselIcon}>&larr;</span>
                </button>
                <div className={styles.carousel} ref={carouselRefChar}>
                  {characters.map((char, index) => (
                    <div className={styles.slide} data-index={index} key={index}>
                      <img src={char.sprite} alt={char.name} />
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
                <h3 className={styles.itemTitle}>{characters[activeSlideIndexChar].name}</h3>
                
                <div className={styles.statsGrid}>
                  <div className={styles.statRow}>
                    <span className={styles.statLabel}>{t('media.labels.faction')}:</span>
                    <span className={styles.statValue}>{characters[activeSlideIndexChar].faction}</span>
                  </div>
                  <div className={styles.statRow}>
                    <span className={styles.statLabel}>{t('media.labels.age')}:</span>
                    <span className={styles.statValue}>{characters[activeSlideIndexChar].age}</span>
                  </div>
                  <div className={styles.statRow}>
                    <span className={styles.statLabel}>{t('media.labels.status')}:</span>
                    <span className={styles.statValue}>{characters[activeSlideIndexChar].status}</span>
                  </div>
                </div>

                <blockquote className={styles.quote}>{characters[activeSlideIndexChar].quote}</blockquote>
                <p className={styles.blockDesc}>{characters[activeSlideIndexChar].desc}</p>
                
                {isCharExpanded && (
                  <div className={styles.moreDesc}>
                    {/* Добавлена обертка detailBlock, чтобы текст унаследовал стиль локаций */}
                    <div className={styles.detailBlock}>
                      <p>{characters[activeSlideIndexChar].moreDesc}</p>
                    </div>
                  </div>
                )}
                
                <button 
                  className={styles.readMoreBtn} 
                  onClick={() => setIsCharExpanded(!isCharExpanded)}
                >
                  {isCharExpanded ? t('media.readLess') : t('media.readMore')}
                </button>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Media;