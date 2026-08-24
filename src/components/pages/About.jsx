import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';

const { Title, Text, Paragraph } = Typography;

const About = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px', color: '#fff' }}>
      
      {/* Главный заголовок */}
      <Title level={1} style={{ 
        color: '#fff', 
        fontWeight: 300, // Делаем шрифт тонким, как в референсе
        letterSpacing: '1px', 
        marginBottom: '40px',
        textTransform: 'uppercase' 
      }}>
        About TALES of WEAK PEOPLE
      </Title>

      <Divider style={{ borderColor: '#333', margin: '24px 0' }} />

      {/* Блок статистики (4 колонки) */}
      <Row justify="space-between" align="middle" style={{ padding: '10px 0' }}>
        
        <Col>
          <Text style={{ display: 'block', color: '#888', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>Founded</Text>
          <Text style={{ color: '#fff', fontSize: '28px', fontWeight: 300 }}>2024</Text>
        </Col>
        
        {/* Вертикальная линия */}
        <div style={{ width: '1px', height: '50px', backgroundColor: '#333' }} />

        <Col>
          <Text style={{ display: 'block', color: '#888', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>Headquarter</Text>
          <Text style={{ color: '#fff', fontSize: '28px', fontWeight: 300 }}>City, Country</Text>
        </Col>

        <div style={{ width: '1px', height: '50px', backgroundColor: '#333' }} />

        <Col>
          <Text style={{ display: 'block', color: '#888', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>Headquarter</Text>
          <Text style={{ color: '#fff', fontSize: '28px', fontWeight: 300 }}>Another City</Text>
        </Col>

        <div style={{ width: '1px', height: '50px', backgroundColor: '#333' }} />

        <Col>
          <Text style={{ display: 'block', color: '#888', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>Produced Games</Text>
          <Text style={{ color: '#fff', fontSize: '28px', fontWeight: 300 }}>1 (In Dev)</Text>
        </Col>

      </Row>

      <Divider style={{ borderColor: '#333', margin: '24px 0' }} />

      {/* Текстовый блок (2 колонки) */}
      <Row gutter={64} style={{ marginTop: '40px' }}>
        
        {/* Левая колонка */}
        <Col xs={24} md={12}>
          <Paragraph style={{ color: '#ccc', fontSize: '16px', lineHeight: '1.8' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </Paragraph>
          <Paragraph italic style={{ color: '#aaa', fontSize: '16px', lineHeight: '1.8' }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
          <Paragraph italic style={{ color: '#aaa', fontSize: '16px', lineHeight: '1.8' }}>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
          </Paragraph>
        </Col>

        {/* Правая колонка */}
        <Col xs={24} md={12}>
          <Paragraph italic style={{ color: '#aaa', fontSize: '16px', lineHeight: '1.8' }}>
            Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.
          </Paragraph>
          <Paragraph italic style={{ color: '#aaa', fontSize: '16px', lineHeight: '1.8' }}>
            Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Aliquam id diam maecenas ultricies mi eget mauris.
          </Paragraph>
          {/* Тот самый акцентный желтый текст */}
          <Paragraph style={{ color: '#d4b856', fontSize: '16px', lineHeight: '1.8', marginTop: '32px' }}>
            For us, games have never been just entertainment - they are emotions, memories, and living worlds that bring millions of players together across generations. (Lorem ipsum dolor sit amet).
          </Paragraph>
        </Col>
        
      </Row>
      
    </div>
  );
};

export default About;