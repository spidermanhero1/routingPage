import React from 'react';
import { useParams } from 'react-router';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const GameDetail = () => {
  // Хук useParams "ловит" параметр из адресной строки (game1, game2 и т.д.)
  const { gameId } = useParams();

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', color: '#fff' }}>
      <Title style={{ color: '#fff', textTransform: 'uppercase' }}>
        Проект: {gameId}
      </Title>
      
      <Paragraph style={{ color: '#ccc', fontSize: '18px' }}>
        Здесь будет собираться контент для игры {gameId}.
      </Paragraph>
    </div>
  );
};

export default GameDetail;