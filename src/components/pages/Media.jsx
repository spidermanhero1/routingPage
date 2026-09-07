import React from 'react';
import { Tabs, Carousel } from 'antd';

const Media = () => {
  // --- КОНТЕНТ ДЛЯ ПЕРВОЙ ИГРЫ ---
  const game1Content = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', marginTop: '24px' }}>
      
      {/* 1. БЛОК С ТРЕЙЛЕРАМИ (YouTube + Боковое меню) */}
      <div style={{ display: 'flex', gap: '24px', height: '500px' }}>
        
        {/* Левая часть: Главный плеер */}
        <div style={{ flex: 3, background: '#000', borderRadius: '12px', overflow: 'hidden' }}>
          <iframe
            width="100%"
            height="100%"
            // Замени на свою ссылку YouTube (важно: используй /embed/ ссылку)
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Правая часть: Список трейлеров */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto' }}>
          <div style={{ height: '120px', minHeight: '120px', background: '#1f2a38', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: '0.2s' }}>
            Teaser Trailer — Coming 2027 (Активный)
          </div>
          <div style={{ height: '120px', minHeight: '120px', background: '#001529', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: '0.2s' }}>
            Coming soon
          </div>
        </div>
      </div>


      {/* 2. БЛОКИ СО СКРИНШОТАМИ (Зигзаг / Шахматка) */}

      {/* Блок А: Текст слева, Карусель справа */}
      <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Персонажи</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#ccc' }}>
            Здесь будет описание персонажей. Расскажи про лор, особенности характера и уникальные способности.
          </p>
        </div>
        <div style={{ flex: 1, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}>
          <Carousel autoplay>
            <div><div style={{ height: '350px', background: '#364d79', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Скрин Персов 1</div></div>
            <div><div style={{ height: '350px', background: '#2f4050', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Скрин Персов 2</div></div>
          </Carousel>
        </div>
      </div>

      {/* Блок Б: Карусель слева, Текст справа (Меняем местами) */}
      <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
        <div style={{ flex: 1, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}>
          <Carousel autoplay>
            <div><div style={{ height: '350px', background: '#2f4050', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Скрин Локаций 1</div></div>
            <div><div style={{ height: '350px', background: '#364d79', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Скрин Локаций 2</div></div>
          </Carousel>
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Атмосферные локации</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#ccc' }}>
            Мрачные коридоры, заброшенные города и скрытые подземелья. Опиши мир игры здесь.
          </p>
        </div>
      </div>

      {/* Блок В: Текст слева, Карусель справа (Снова как в первом) */}
      <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Геймплей</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#ccc' }}>
            Динамичные бои, сложные головоломки и принятие решений. Тут текст про механики.
          </p>
        </div>
        <div style={{ flex: 1, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}>
          <Carousel autoplay>
            <div><div style={{ height: '350px', background: '#364d79', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Скрин Геймплея 1</div></div>
            <div><div style={{ height: '350px', background: '#2f4050', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Скрин Геймплея 2</div></div>
          </Carousel>
        </div>
      </div>

    </div>
  );

  // --- НАСТРОЙКА ВКЛАДОК (Верхнее меню игр) ---
  const tabItems = [
    { key: '1', label: 'TALES of WEAK PEOPLE', children: game1Content },
    // { key: '2', label: 'Будущая игра', children: <div>Информация скоро появится...</div> },
    // { key: '3', label: 'Еще один проект', children: <div>Засекречено</div> },
  ];

  return (
    <div style={{ width: '100%', color: '#fff' }}>
      {/* Компонент Tabs от AntD идеально заменяет твои кнопки "Название игры" */}
      <Tabs 
        defaultActiveKey="1" 
        items={tabItems} 
        size="large"
        centered // Центрируем табы
      />
    </div>
  );
};

export default Media;