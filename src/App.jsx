import React from 'react';
import Header from './components/Header/Header';
import AppFooter from './components/AppFooter/AppFooter';
import AppRoutes from './routes';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.appLayout}>
      <Header />
      <main className={styles.mainContent}>
        <AppRoutes />
      </main>
      <AppFooter />
    </div>
  );
};

export default App;