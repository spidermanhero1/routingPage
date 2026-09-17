import React from 'react';
import styles from './AppFooter.module.css';
import logo from '../../assets/logonew.png';
import discordIcon from '../../assets/Discord-Symbol-White.svg';
import youtubeIcon from '../../assets/youtubewhite.png' 
 

import { CONTACTS } from '../../data/contacts';

const AppFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* 1. Левый блок: Соц сети */}
      <div className={styles.leftBlock}>
        <div className={styles.socialGroup}>
          
          {/* Discord (Новая контурная иконка) */}
          <a href={CONTACTS.discord} target="_blank" rel="noreferrer" className={styles.iconLink}>
            <img 
              src={discordIcon} 
              alt="discord" 
              style={{ width: '24px', height: '24px', flexShrink: 0 }} 
            />
          </a>

          {/* Instagram */}
          <a href={CONTACTS.instagram} target="_blank" rel="noreferrer" className={styles.iconLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* Telegram */}
          <a href={CONTACTS.telegram} target="_blank" rel="noreferrer" className={styles.iconLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </a>

          {/* YouTube */}
          <a href={CONTACTS.youtube} target="_blank" rel="noreferrer" className={styles.iconLink}>
            <img 
              src={youtubeIcon} 
              alt="youtubeIcon" 
              style={{ width: '24px', height: '24px', flexShrink: 0 }} 
            />
          </a>

        </div>
      </div>

      {/* 2. Центральный блок: Лого и Приват полис */}
      <div className={styles.centerBlock}>
        <img src={logo} alt="Logo" className={styles.logoImage} />
        <a href="/privacy" className={styles.privacyLink}>
          private policy {currentYear}
        </a>
      </div>

      {/* 3. Правый блок: Краткие контакты (добавлен Telegram) */}
      <div className={styles.rightBlock}>
        <span className={styles.contactsLabel}></span>
        <a href={`mailto:${CONTACTS.email}`} className={styles.emailLink}>
          {CONTACTS.email}
        </a>
        <a href={CONTACTS.telegram} target="_blank" rel="noreferrer" className={styles.emailLink}>
          {CONTACTS.telegramLabel}
        </a>
      </div>
    </footer>
  );
};

export default AppFooter;