import React, { useState, useRef, useEffect } from 'react';
import styles from './Media.module.css';

// Твои импорты картинок
import screen1 from './../../assets/prScr1.png';
import screen2 from './../../assets/tankScr.png';
import screen3 from './../../assets/homeScr.png';
import screen4 from './../../assets/trashScr.png';
// import screen5 from './../../assets/newScr.png'; // <-- Просто импортируй новую

const Media = () => {
  const [activeTab, setActiveTab] = useState('1');

  // Управляем активным слайдом
  const [activeSlideIndexA, setActiveSlideIndexA] = useState(0);
  const [activeSlideIndexB, setActiveSlideIndexB] = useState(0);

  const carouselRefA = useRef(null);
  const carouselRefB = useRef(null);

  // === МАГИЯ РАСШИРЯЕМОСТИ ЗДЕСЬ ===
  // Просто складывай сюда картинки. Хоть 2, хоть 10.
  const carouselA_images = [screen1, screen2]; 
  const carouselB_images = [screen3, screen4];

  // Код сам посчитает, сколько у тебя слайдов
  const slidesCountA = carouselA_images.length;
  const slidesCountB = carouselB_images.length;

  // Intersection Observer
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

      const observerA = new IntersectionObserver(
        (entries) => observerCallback(entries, setActiveSlideIndexA),
        { threshold: 0.5 }
      );
      if (carouselRefA.current) {
        Array.from(carouselRefA.current.children).forEach(child => observerA.observe(child));
      }

      const observerB = new IntersectionObserver(
        (entries) => observerCallback(entries, setActiveSlideIndexB),
        { threshold: 0.5 }
      );
      if (carouselRefB.current) {
        Array.from(carouselRefB.current.children).forEach(child => observerB.observe(child));
      }

      return () => {
        observerA.disconnect();
        observerB.disconnect();
      };
    }
  }, [activeTab, slidesCountA, slidesCountB]); // Добавили зависимости длины массивов

  // Функция для прокрутки
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
          
          {/* 1. Блок с трейлерами */}
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
                Teaser Trailer — Coming 2027
              </div>
              <div className={styles.trailerItem}>
                Coming soon
              </div>
            </div>
          </div>

          {/* 2. Блок А: Текст слева, Карусель справа */}
          <div className={styles.zigzagBlock}>
            <div className={styles.textContent}>
              <h2 className={styles.blockTitle}>Персонажи</h2>
              <p className={styles.blockDesc}>
                Здесь будет описание персонажей. Расскажи про лор, особенности характера и уникальные способности.
              </p>
            </div>
            
            <div className={styles.carouselWrapper}>
              <button
                className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
                onClick={() => scrollCarousel(carouselRefA, activeSlideIndexA === 0 ? slidesCountA - 1 : activeSlideIndexA - 1)}
              >
                <span className={styles.carouselIcon}>&larr;</span>
              </button>
              
              <div className={styles.carousel} ref={carouselRefA}>
                {/* Рендерим слайды автоматически из массива */}
                {carouselA_images.map((imgSrc, index) => (
                  <div className={styles.slide} data-index={index} key={index}>
                    <img src={imgSrc} alt={`Скрин Персов ${index + 1}`} />
                  </div>
                ))}
              </div>

              <button
                className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
                onClick={() => scrollCarousel(carouselRefA, activeSlideIndexA === slidesCountA - 1 ? 0 : activeSlideIndexA + 1)}
              >
                <span className={styles.carouselIcon}>&rarr;</span>
              </button>
            </div>
          </div>

          {/* 3. Блок Б: Карусель слева, Текст справа */}
          <div className={styles.zigzagBlock}>
            
            <div className={styles.carouselWrapper}>
              <button
                className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
                onClick={() => scrollCarousel(carouselRefB, activeSlideIndexB === 0 ? slidesCountB - 1 : activeSlideIndexB - 1)}
              >
                <span className={styles.carouselIcon}>&larr;</span>
              </button>
              
              <div className={styles.carousel} ref={carouselRefB}>
                {/* Рендерим слайды автоматически из массива */}
                {carouselB_images.map((imgSrc, index) => (
                  <div className={styles.slide} data-index={index} key={index}>
                    <img src={imgSrc} alt={`Скрин Локаций ${index + 1}`} />
                  </div>
                ))}
              </div>

              <button
                className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
                onClick={() => scrollCarousel(carouselRefB, activeSlideIndexB === slidesCountB - 1 ? 0 : activeSlideIndexB + 1)}
              >
                <span className={styles.carouselIcon}>&rarr;</span>
              </button>
            </div>

            <div className={styles.textContent}>
              <h2 className={styles.blockTitle}>Атмосферные локации</h2>
              <p className={styles.blockDesc}>
                Мрачные коридоры, заброшенные города и скрытые подземелья. Опиши мир игры здесь.
              </p>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

export default Media;