import React from 'react';
import styles from './Privacy.module.css';
import { useLanguage } from '../../context/LanguageContext';

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('privacy.title')}</h1>
        <p className={styles.intro}>{t('privacy.intro')}</p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('privacy.dataCollectionTitle')}</h2>
          <p className={styles.text}>{t('privacy.dataCollectionText')}</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('privacy.cookiesTitle')}</h2>
          <p className={styles.text}>{t('privacy.cookiesText')}</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('privacy.logsTitle')}</h2>
          <p className={styles.text}>{t('privacy.logsText')}</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('privacy.externalTitle')}</h2>
          <p className={styles.text}>{t('privacy.externalText')}</p>
        </div>

        <div className={styles.footerNote}>
          {t('privacy.footerNote')}
        </div>
      </div>
    </div>
  );
};

export default Privacy;