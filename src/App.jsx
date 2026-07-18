import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Home from './components/pages/Home';
import About from './components/pages/About';
import OurGame from './components/pages/OurGame';
import Contact from './components/pages/Contact';
import Steam from './components/pages/Steam';
import { useNavigate } from 'react-router';
import AppRoutes from './routes';


const { Header, Content, Footer } = Layout;
// const menu = [Home, About, OurGame, Contact, Steam]
// const items = menu.map((element) => ({
//   key: element.name,
//   label: element.name,
// }));



const App = () => {

const navigate = useNavigate()

        const items = [
          { key: 'home', label: 'Home', onClick: () => navigate('/') },
          { key: 'about', label: 'About', onClick: () => navigate('/about') },
          { key: 'games', label: 'OurGame', onClick: () => navigate('/games') }, 
          { key: 'contact', label: 'Contact', onClick: () => navigate('/contact') },
          { key: 'steam', label: 'Steam', onClick: () => navigate('/steam') },
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
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
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
      <Footer style={{ textAlign: 'center' }}>Ant Design ©{currentYear} Created by Ant UED</Footer>
    </Layout>
  );
};
export default App;