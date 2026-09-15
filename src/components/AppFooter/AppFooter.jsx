import React from 'react';
import styles from './AppFooter.module.css';
import logo from '../../assets/face.png';
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
              <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
              <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.143 3.5 -2c1.14 -1.523 1.65 -4.872 1.5 -6.5c-3 -2.133 -5.5 -2.5 -8 -2.5c-2.5 0 -5.5 .367 -8 2.5c-.15 1.628 .36 4.977 1.5 6.5c.667 .857 2 2 3.5 2c.5 0 2 -2 2 -3"></path>
              <path d="M8.5 14c1.5 1.5 5.5 1.5 7 0"></path>
            </svg>
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>

        </div>
      </div>

      {/* 2. Центральный блок: Лого и Приват полис */}
      <div className={styles.centerBlock}>
        <img src={logo} alt="Logo" className={styles.logoImage} />
        <a href="/privacy" className={styles.privacyLink}>
          Приват полис © {currentYear}
        </a>
      </div>

      {/* 3. Правый блок: Краткие контакты (добавлен Telegram) */}
      <div className={styles.rightBlock}>
        <span className={styles.contactsLabel}>Краткие контакты</span>
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