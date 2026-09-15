import React from 'react';
import styles from './Privacy.module.css';

const Privacy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Политика конфиденциальности TWP.Studio</h1>
        <p className={styles.intro}>
          Мы в TWP.Studio уважаем вашу приватность. Наш сайт — это исключительно информационная витрина наших проектов.
        </p>
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Сбор данных</h2>
          <p className={styles.text}>
            Мы не собираем, не храним и не обрабатываем ваши личные данные (имена, почты, телефоны или платежную информацию). 
            На сайте нет форм ввода, регистрации и подписок.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Файлы cookie</h2>
          <p className={styles.text}>
            Мы не используем рекламные трекеры, маркетинговые cookie и аналитические системы для слежки за пользователями.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Технические логи</h2>
          <p className={styles.text}>
            Хостинг-провайдер сайта может временно фиксировать базовые технические параметры сетевых запросов (IP-адрес, тип браузера) 
            исключительно для обеспечения защиты от атак и стабильности сервера.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Внешние платформы</h2>
          <p className={styles.text}>
            На сайте размещены ссылки на наши сообщества, включая официальную группу в Steam (steamcommunity.com/groups/twpstudio). 
            При переходе по внешним ссылкам действуют политики конфиденциальности соответствующих платформ (например, Valve Corporation).
          </p>
        </div>

        <div className={styles.footerNote}>
          По всем вопросам вы можете обращаться напрямую через наше сообщество в Steam.
        </div>
      </div>
    </div>
  );
};

export default Privacy;