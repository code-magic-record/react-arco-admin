import { Avatar, Dropdown, Layout, Menu } from '@arco-design/web-react';
import { IconPoweroff, IconSettings } from '@arco-design/web-react/icon';

import React from 'react';
import './index.less';

const classPrefix = 'header';

const Header = () => {
  return (
    <Layout.Header>
      <div className={classPrefix}>
        <div className={`${classPrefix}-avatar`}>
          <Dropdown
            position="br"
            droplist={
              <Menu>
                <Menu.Item key="1">
                  <IconSettings />
                  <span className="ml-[5px]">用户设置</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <IconPoweroff />
                  <span className="ml-[5px]">退出登录</span>
                </Menu.Item>
              </Menu>
            }
          >
            <Avatar autoFixFontSize={false}>
              <img src="https://avatars.githubusercontent.com/u/42566669?v=4" alt="" />
            </Avatar>
          </Dropdown>
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;
