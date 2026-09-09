import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import styles from './Header.module.css';
import logoSrc from '../../assets/face.png';

const NAVIGATION = [
  { path: '/media', label: 'Media' },
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer} onClick={() => navigate('/')}>
        <img src={logoSrc} alt="Logo" className={styles.logoImage} />
      </div>

      <nav className={styles.nav}>
        {NAVIGATION.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              type="button"
              className={`${styles.navItem} ${isActive ? styles.active : ''}`}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className={styles.actions}>
        <div className={styles.socialList}>
          <a href="https://discord.gg/" target="_blank" rel="noreferrer" className={styles.socialLink}>Disk</a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className={styles.socialLink}>Inst</a>
          <a href="https://t.me/" target="_blank" rel="noreferrer" className={styles.socialLink}>TG</a>
          <a href="https://youtube.com/" target="_blank" rel="noreferrer" className={styles.socialLink}>YT</a>
        </div>
        <div className={styles.systemControls}>
          <button type="button" className={styles.controlBtn}>RU</button>
          <button type="button" className={styles.controlBtn}>☼</button>
        </div>
      </div>
    </header>
  );
};

export default Header;