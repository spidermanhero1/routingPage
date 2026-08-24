import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Home from './components/pages/Home';
import About from './components/pages/About';
import OurGame from './components/pages/OurGame';
import Contact from './components/pages/Contact';
import Media from './components/pages/Media';
import { useNavigate } from 'react-router';
import AppRoutes from './routes';


const { Header, Content, Footer } = Layout;
// const menu = [Home, About, OurGame, Contact, Steam]
// const items = menu.map((element) => ({
//   key: element.name,
//   label: element.name,
// }));

const App = () => {
  const navigate = useNavigate();

  const items = [
    
    { key: 'games', label: 'OurGame', onClick: () => navigate('/games') }, 
    { key: 'media', label: 'Media', onClick: () => navigate('/media') },

    { 
      key: 'home', 
      label: (
        <img 
          src="/home.png" // Указываем путь к картинке напрямую от корня
          alt="Home" 
          style={{ height: '32px', width: 'auto', verticalAlign: 'middle' }} 
        />
      ), 
      onClick: () => navigate('/') 
    },
    { key: 'about', label: 'About', onClick: () => navigate('/about') },
    { key: 'contact', label: 'Contact', onClick: () => navigate('/contact') },
  ];

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const currentYear = new Date().getFullYear();
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={items}
          style={{ flex: 1, minWidth: 0, justifyContent: 'center' }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'Работаем' }, { title: 'Улучшаем' }, { title: 'Создаем' }]}
        />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <AppRoutes/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>SpiderMan company {currentYear} Created by Kyzen</Footer>
    </Layout>
  );
};
export default App;