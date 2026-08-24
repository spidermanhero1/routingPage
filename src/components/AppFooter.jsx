import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  const currentYear = new Date().getFullYear();

 return (
    <Footer style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      background: '#001529', // Темный фон (можешь поменять на свой)
      color: '#fff',
      padding: '24px 50px'
    }}>
      
      {/* 1. Левый блок: Соц сети */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
        <span>Соц сети</span>
      </div>

      {/* 2. Центральный блок: Лого и Приват полис */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div style={{ fontWeight: 'bold', fontSize: '20px' }}>Лого</div>
        <a href="/privacy" style={{ color: '#aaa', fontSize: '12px', textDecoration: 'none' }}>
          Приват полис © {currentYear}
        </a>
      </div>

      {/* 3. Правый блок: Краткие контакты */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', textAlign: 'right' }}>
        <span>Краткие контакты<br/>email@example.com</span>
      </div>

    </Footer>
  );
};

export default AppFooter;