import React from 'react';
import styles from './Header.module.css';
import { useNavigate, useLocation } from 'react-router';
import { CONTACTS } from '../../data/contacts';
import { useLanguage } from '../../context/LanguageContext';
import logoSrc from '../../assets/logo.png';
import discordIcon from '../../assets/Discord-Symbol-White.svg'; 
import youtubeIcon from '../../assets/youtubewhite.png' 


const NAVIGATION = [
  { path: '/media', label: 'Media' },
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  // 1. Проверяем, находимся ли мы на главной странице
  const isHomePage = location.pathname === '/';

  // 2. Динамически собираем классы для хедера
  const headerClass = isHomePage 
    ? `${styles.headerBase} ${styles.headerCinematic}` 
    : styles.headerBase;

  return (
    <header className={headerClass}>
      <div className={styles.logoContainer} onClick={() => navigate('/')}>
        <img src={logoSrc} alt="Logo" className={styles.logoImage} />
      </div>

      <nav className={styles.nav}>
        {/* 3. Применяем функцию t() к названиям вкладок */}
        <button
          className={`${styles.navItem} ${location.pathname === '/media' ? styles.active : ''}`}
          onClick={() => navigate('/media')}
        >
          {t('nav.media')}
        </button>
        <button
          className={`${styles.navItem} ${location.pathname === '/' ? styles.active : ''}`}
          onClick={() => navigate('/')}
        >
          {t('nav.home')}
        </button>
        <button
          className={`${styles.navItem} ${location.pathname === '/about' ? styles.active : ''}`}
          onClick={() => navigate('/about')}
        >
          {t('nav.about')}
        </button>
        <button
          className={`${styles.navItem} ${location.pathname === '/contact' ? styles.active : ''}`}
          onClick={() => navigate('/contact')}
        >
          {t('nav.contact')}
        </button>
      </nav>

      <div className={styles.actions}>
        <div className={styles.socialList}>
          
          {/* Discord */}
          <a href={CONTACTS.discord} target="_blank" rel="noreferrer" className={styles.socialLink}>
            <img 
               src={discordIcon} 
               alt="discord" 
               style={{ width: '24px', height: '24px', flexShrink: 0 }} 
             />
          </a>

          {/* Instagram */}
          <a href={CONTACTS.instagram} target="_blank" rel="noreferrer" className={styles.socialLink}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* Telegram */}
          <a href={CONTACTS.telegram} target="_blank" rel="noreferrer" className={styles.socialLink}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </a>

          {/* YouTube */}
          <a href={CONTACTS.youtube} target="_blank" rel="noreferrer" className={styles.socialLink}>
            <img 
               src={youtubeIcon} 
               alt="youtubeI" 
               style={{ width: '24px', height: '24px', flexShrink: 0 }} 
             />
          </a>

        </div>     
       <div className={styles.systemControls}>
          {/* 4. Кнопки смены языка EN и UK */}
          <button 
            type="button" 
            className={styles.controlBtn}
            style={{ color: lang === 'en' ? '#fff' : '#666' }}
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <span style={{ color: '#444', fontSize: '11px' }}>|</span>
          <button 
            type="button" 
            className={styles.controlBtn}
            style={{ color: lang === 'uk' ? '#fff' : '#666' }}
            onClick={() => setLang('uk')}
          >
            UA
          </button>
          <span style={{ color: '#444', fontSize: '11px' }}>|</span>
          <button 
            type="button" 
            className={styles.controlBtn}
            style={{ color: lang === 'ru' ? '#fff' : '#666' }}
            onClick={() => setLang('ru')}
          >
            RU
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;