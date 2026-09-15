import React from 'react';
import styles from './AppFooter.module.css';
import logo from '../../assets/home.png';

const AppFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* 1. Левый блок: Соц сети */}
      <div className={styles.leftBlock}>
        <div className={styles.socialGroup}>
          {/* Instagram */}
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className={styles.iconLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* Telegram */}
          <a href="https://t.me/" target="_blank" rel="noreferrer" className={styles.iconLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </a>

          {/* YouTube */}
          <a href="https://youtube.com/" target="_blank" rel="noreferrer" className={styles.iconLink}>
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

      {/* 3. Правый блок: Краткие контакты */}
      <div className={styles.rightBlock}>
        <span className={styles.contactsLabel}>Краткие контакты</span>
        <a href="mailto:email@example.com" className={styles.emailLink}>
          email@example.com
        </a>
        </div>
    </footer >
  );
};

export default AppFooter;

