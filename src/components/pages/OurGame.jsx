import React from 'react';
import { Typography, Row, Col, Button, Tag } from 'antd';
import { useNavigate } from 'react-router';

const { Title, Paragraph } = Typography;

const OurGame = () => {
  const navigate = useNavigate();

  // Общий стиль для горизонтальной карточки
  const cardStyle = {
    background: '#001529',
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '48px',
    border: '1px solid #1f2a38',
    transition: 'transform 0.3s',
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
      
      <Title level={1} style={{ color: '#fff', fontWeight: 300, textAlign: 'center', marginBottom: '60px', textTransform: 'uppercase' }}>
        Наши Проекты
      </Title>

      {/* ПРОЕКТ 1: Постер СЛЕВА, Текст СПРАВА */}
      <Row 
        style={cardStyle} 
        align="middle"
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        {/* Постер (пока заглушка) */}
        <Col xs={24} md={12} style={{ height: '300px', background: '#1f2a38', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#555' }}>Постер TALES of WEAK PEOPLE</span>
        </Col>
        
        {/* Описание */}
        <Col xs={24} md={12} style={{ padding: '40px' }}>
          <Tag color="gold" style={{ marginBottom: '16px' }}>В разработке</Tag>
          <Title level={2} style={{ color: '#fff', marginTop: 0 }}>TALES of WEAK PEOPLE</Title>
          <Paragraph style={{ color: '#ccc', fontSize: '16px' }}>
            Мрачная история о выживании, где каждый выбор имеет цену. Исследуйте безжалостный мир и найдите свой путь во тьме.
          </Paragraph>
          <Button type="primary" size="large" onClick={() => navigate('/games/tales-of-weak-people')} style={{ marginTop: '16px' }}>
            Узнать больше
          </Button>
        </Col>
      </Row>

      {/* ПРОЕКТ 2: Текст СЛЕВА, Постер СПРАВА (Меняем порядок для красоты) */}
      <Row 
        style={cardStyle} 
        align="middle"
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        {/* Описание (на десктопе оно будет слева, порядок меняем через order) */}
        <Col xs={24} md={{ span: 12, order: 1 }} style={{ padding: '40px', order: 2 }}>
          <Tag color="blue" style={{ marginBottom: '16px' }}>Концепт</Tag>
          <Title level={2} style={{ color: '#fff', marginTop: 0 }}>Project: UNKNOWN</Title>
          <Paragraph style={{ color: '#ccc', fontSize: '16px' }}>
            Секретный проект студии. Кооперативный шутер нового поколения с уникальной механикой взаимодействия среды.
          </Paragraph>
          <Button size="large" ghost onClick={() => navigate('/games/project-unknown')} style={{ marginTop: '16px' }}>
            Скоро...
          </Button>
        </Col>

        {/* Постер */}
        <Col xs={24} md={{ span: 12, order: 2 }} style={{ height: '300px', background: '#111b26', display: 'flex', alignItems: 'center', justifyContent: 'center', order: 1 }}>
          <span style={{ color: '#444' }}>Секретный постер</span>
        </Col>
      </Row>

    </div>
  );
};

export default OurGame;