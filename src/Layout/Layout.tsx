import { Layout } from '@arco-design/web-react';
import { IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';
import React, { useState } from 'react';
import './index.less';
import MainRoute from './MainRoute';
import { MenuComponent } from './Menu';

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

const LayoutMain: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout className="layout-collapse-demo">
      <Sider
        collapsed={collapsed}
        onCollapse={handleCollapsed}
        collapsible
        trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}
        breakpoint="xl"
      >
        <div className="logo" />
        <MenuComponent />
      </Sider>
      <Layout>
        <Header style={{ paddingLeft: 20 }}>Header</Header>
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
