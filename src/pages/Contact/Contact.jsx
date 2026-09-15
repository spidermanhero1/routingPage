import React from 'react';
import styles from './Contact.module.css';
import { CONTACTS } from '../../data/contacts';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Наши контакты</h1>
        <p className={styles.intro}>
          У вас есть вопросы, предложения или вы хотите написать обзор на нашу игру? 
          Свяжитесь с нужным отделом напрямую.
        </p>

        <div className={styles.list}>
          {/* Карточка Email */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>💼</span>
              <span className={styles.label}>Бизнес и партнерство</span>
            </div>
            <a href={`mailto:${CONTACTS.email}`} className={styles.link}>
              {CONTACTS.email}
            </a>
          </div>

          {/* Карточка Telegram */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>📱</span>
              <span className={styles.label}>Для срочных вопросов (Telegram)</span>
            </div>
            <a href={CONTACTS.telegram} target="_blank" rel="noreferrer" className={styles.link}>
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;