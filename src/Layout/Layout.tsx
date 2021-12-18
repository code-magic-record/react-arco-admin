import { Layout, Menu, Breadcrumb, Message } from '@arco-design/web-react';
import { IconHome, IconCalendar, IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';
import React, { useState } from 'react';
import './index.less';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
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
        theme="dark"
        collapsed={collapsed}
        onCollapse={handleCollapsed}
        collapsible
        trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}
        breakpoint="xl"
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultOpenKeys={['1']}
          defaultSelectedKeys={['0_3']}
          onClickMenuItem={(key) => Message.info({ content: `You select ${key}`, showIcon: true })}
          style={{ width: '100%' }}
        >
          <MenuItem key="0_1" disabled>
            <IconHome />
            Menu 1
          </MenuItem>
          <MenuItem key="0_2">
            <IconCalendar />
            Menu 2
          </MenuItem>
          <MenuItem key="0_3">
            <IconCalendar />
            Menu 3
          </MenuItem>
          <SubMenu
            key="1"
            title={
              <span>
                <IconCalendar />
                Navigation 1
              </span>
            }
          >
            <MenuItem key="1_1">Menu 1</MenuItem>
            <MenuItem key="1_2">Menu 2</MenuItem>
            <SubMenu key="2" title="Navigation 2">
              <MenuItem key="2_1">Menu 1</MenuItem>
              <MenuItem key="2_2">Menu 2</MenuItem>
            </SubMenu>
            <SubMenu key="3" title="Navigation 3">
              <MenuItem key="3_1">Menu 1</MenuItem>
              <MenuItem key="3_2">Menu 2</MenuItem>
              <MenuItem key="3_3">Menu 3</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="4"
            title={
              <span>
                <IconCalendar />
                Navigation 4
              </span>
            }
          >
            <MenuItem key="4_1">Menu 1</MenuItem>
            <MenuItem key="4_2">Menu 2</MenuItem>
            <MenuItem key="4_3">Menu 3</MenuItem>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ paddingLeft: 20 }}>Header</Header>
        <Layout style={{ padding: '0 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default LayoutMain;
