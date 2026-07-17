import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Home from './components/pages/Home';
import About from './components/pages/About';
import OurGame from './components/pages/OurGame';
import Contact from './components/pages/Contact';
import Steam from './components/pages/Steam';



const { Header, Content, Footer } = Layout;
const menu = [Home, About, OurGame, Contact, Steam]
const items = menu.map((element) => ({
  key: element.name,
  label: element.name,
}));
const App = () => {
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
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©{currentYear} Created by Ant UED</Footer>
    </Layout>
  );
};
export default App;