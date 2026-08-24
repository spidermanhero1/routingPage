import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer style={{ textAlign: 'center' }}>
      SpiderMan company {currentYear} Created by Kyzen
    </Footer>
  );
};

export default AppFooter;