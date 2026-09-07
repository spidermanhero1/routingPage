import React from 'react';
import { Row, Col, Typography, Card } from 'antd';

const { Title, Text, Paragraph } = Typography;

const Contact = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 0' }}>
      
      <Row justify="center">
        <Col xs={24}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '16px' }}>
            Наши контакты
          </Title>
          <Paragraph style={{ fontSize: '16px', color: '#888', marginBottom: '32px', textAlign: 'center' }}>
            У вас есть вопросы, предложения или вы хотите написать обзор на нашу игру? 
            Свяжитесь с нужным отделом напрямую.
          </Paragraph>

          {/* Контейнер для карточек, отцентрированный по ширине */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px', margin: '0 auto' }}>
            
            {/* <Card size="small" hoverable>
              <Text strong style={{ fontSize: '16px' }}>🎮 Техподдержка игроков</Text>
              <br />
              <a href="mailto:support@talesofweakpeople.com">twp.studio.games@gmail.com</a>
            </Card> */}

            {/* <Card size="small" hoverable>
              <Text strong style={{ fontSize: '16px' }}>📰 Пресса и PR</Text>
              <br />
              <a href="mailto:press@talesofweakpeople.com">press@talesofweakpeople.com</a>
            </Card> */}

            <Card size="small" hoverable>
              <Text strong style={{ fontSize: '16px' }}>💼 Бизнес и партнерство</Text>
              <br />
              <a href="mailto:bizdev@talesofweakpeople.com">twp.studio.games@gmail.com</a>
            </Card>

            {/* Добавленные номера телефонов */}
            {/* <Card size="small" hoverable>
              <Text strong style={{ fontSize: '16px' }}>📞 Главный офис</Text>
              <br />
              <a href="tel:+12345678900">+1 (234) 567-89-00</a>
            </Card> */}

            <Card size="small" hoverable>
              <Text strong style={{ fontSize: '16px' }}>📱 Для срочных вопросов (@twpstudio)</Text>
              <br />
            </Card>

          </div>
        </Col>
      </Row>
      
    </div>
  );
};

export default Contact;