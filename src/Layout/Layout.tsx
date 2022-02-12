import { Layout } from '@arco-design/web-react';
import { IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';
import React, { useState } from 'react';
import Header from './Header/Header';
import './index.less';
import MainRoute from './MainRoute';
import { MenuComponent } from './Menu';

const Sider = Layout.Sider;
const Footer = Layout.Footer;
const Content = Layout.Content;

const LayoutMain: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout className="layout-collapse-demo">
      <Header />
      <Layout>
        <Sider
          collapsed={collapsed}
          onCollapse={handleCollapsed}
          collapsible
          trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}
          breakpoint="xl"
        >
          <MenuComponent />
        </Sider>
        <Layout style={{ padding: '0 24px' }}>
          <Content style={{ marginTop: '20px' }}>
            <MainRoute />
          </Content>
          <Footer>鄂ICP备18026800号-1</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default LayoutMain;
