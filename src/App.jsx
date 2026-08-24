import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Dropdown } from 'antd';
import AppFooter from './components/AppFooter';
import Home from './components/pages/Home';
import About from './components/pages/About';
import OurGame from './components/pages/OurGame';
import Contact from './components/pages/Contact';
import Media from './components/pages/Media';
import { useNavigate } from 'react-router';
import AppRoutes from './routes';


const { Header, Content } = Layout;


const App = () => {
  const navigate = useNavigate();

  const items = [
    
    { 
  key: 'games', 
  label: (
    <Dropdown dropdownRender={() => gamesDropdownMenu} trigger={['hover']} placement="bottomLeft">
      <div style={{ height: '100%', display: 'flex', alignItems: 'center' }} onClick={() => navigate('/games')}>
        OurGame
      </div>
    </Dropdown>
  )
},    
    
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
const gamesDropdownMenu = (
    <div style={{ 
      display: 'flex', 
      gap: '24px', 
      padding: '24px', 
      background: '#001529', 
      borderRadius: '0 0 8px 8px', 
      boxShadow: '0 8px 16px rgba(0,0,0,0.5)' 
    }}>
      
      {/* Место под постер 1 */}
      <div onClick={() => navigate('/games/game1')} style={{ cursor: 'pointer', textAlign: 'center', color: '#fff' }}>
        <div style={{ width: '120px', height: '160px', backgroundColor: '#1f2a38', borderRadius: '6px', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Постер 1
        </div>
        <span>Игра 1</span>
      </div>

      {/* Место под постер 2 */}
      <div onClick={() => navigate('/games/game2')} style={{ cursor: 'pointer', textAlign: 'center', color: '#fff' }}>
        <div style={{ width: '120px', height: '160px', backgroundColor: '#1f2a38', borderRadius: '6px', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Постер 2
        </div>
        <span>Игра 2</span>
      </div>

    </div>
  );

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
      <AppFooter />
    </Layout>
  );
};
export default App;