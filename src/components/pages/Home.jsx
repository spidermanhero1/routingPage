import React from 'react';
import promoVideo from '../../assets/tizer.mp4'; // Импортируем видео

const Home = () => {
  return (
    <div style={{ width: '100%' }}>
      
      {/* Блок с видео */}
      <div style={{ 
        width: '100%', 
        maxHeight: '70vh', // высотa
        overflow: 'hidden', 
        borderRadius: '12px', 
        marginBottom: '24px' 
      }}>
        <video 
          src={promoVideo} /*имя файла assets */
          autoPlay 
          loop 
          muted 
          playsInline // Важно для корректной работы на iOS (если кто-то зайдет с планшета/телефона)
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', // Видео заполнит блок без искажения пропорций
            pointerEvents: 'none' // Отключаем клики по видео, чтобы оно было как фон
          }} 
        />
      </div>

      {/* Дальше пойдет твой основной контент главной страницы */}
      <h1 style={{ textAlign: 'center' }}>Добро пожаловать в TALES of WEAK PEOPLE</h1>
      
    </div>
  );
};

export default Home;