import React from 'react';
import styles from './Contact.module.css';
import { CONTACTS } from '../../data/contacts';
import { useLanguage } from '../../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage(); // Достаем функцию перевода

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('contact.title')}</h1>
        <p className={styles.intro}>
          {t('contact.subtitle')}
        </p>

        <div className={styles.list}>
          {/* Карточка Email */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.label}>{t('contact.businessTitle')}</span>
            </div>
            <a href={`mailto:${CONTACTS.email}`} className={styles.link}>
              {CONTACTS.email}
            </a>
          </div>

          {/* Карточка Telegram */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.label}>{t('contact.devTitle')}</span>
            </div>
            <a href={CONTACTS.telegram} target="_blank" rel="noreferrer" className={styles.link}>
              {t('contact.telegramAction')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;