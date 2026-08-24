import React from 'react';

const Home = () => {
  return (
    <div style={{ width: '100%' }}>
      
      {/* Блок с видео */}
      <div style={{ 
        width: '100%', 
        maxHeight: '70vh', // Ограничиваем высоту, чтобы видео не занимало весь экран
        overflow: 'hidden', 
        borderRadius: '12px', // Красиво закругляем углы (по желанию)
        marginBottom: '24px' // Отступ снизу для будущего текста
      }}>
        <video 
          src="/tizer.mp4" /* Имя твоего файла из папки public */
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